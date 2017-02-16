// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import Button from '../components/Button'
import { addProduct } from '../actions/cart'
import type { TMoltinProduct, TMoltinImage } from '../utils/js/types'
import { initStore } from '../store'
import { Provider } from 'react-redux'
import classNames from 'classnames'

type Props = {
  product: TMoltinProduct,
  dispatch: () => any,
  isServer: boolean,
  initialState: Object
}

type State = {
  currentPicture: TMoltinImage,
  isLoading: boolean
}

export default class ProductDetails extends React.Component {
  props: Props
  state: State
  store: Object

  static async getInitialProps ({ query, req }) {
    const isServer = !!req
    const id = query.id || query.slug.split('_')[1]
    const product = await Moltin.fetchProduct(id)
    const store = initStore({}, isServer)

    return { product, initialState: store.getState(), isServer }
  }

  componentDidMount () {
    this.setState({ currentPicture: this.props.product.images[0] })
  }

  constructor (props: Props) {
    super(props)

    this.store = initStore(props.initialState, props.isServer)
    this.state = {
      currentPicture: null,
      isLoading: false
    }
  }

  render () {
    const { product } = this.props
    const { currentPicture, isLoading } = this.state
    const { title, description, brand, images } = product

    const addButtonCartClassName = classNames({
      'is-loading': isLoading
    })

    return product ? (
      <Provider store={this.store}>
        <Layout title={title}>
          <div className='container'>
            <div className='columns'>
              <div className='column is-half'>
                <div>
                  {
                    currentPicture ? <img src={currentPicture.url.http} alt={currentPicture.name} /> : null
                  }
                </div>
                <div className='columns'>
                  {
                    images.map(this._renderPictures)
                  }
                </div>
              </div>
              <div className='column is-half'>
                <section className='section'>
                  <div className='heading'>
                    <h1 className='title'>{ title }</h1>
                    <h2 className='subtitle'>{ brand.value }</h2>
                  </div>
                  <p className='content'>
                    { description }
                  </p>
                  <div>
                    <Button type='primary' onClick={this._addProduct} className={addButtonCartClassName}>
                      Ajouter au panier
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Layout>
      </Provider>
    ) : null
  }

  _renderPictures = (picture: TMoltinImage, i: number): React$Element<*> =>
    <div className='column' key={i}>
      <img src={picture.url.http} alt={picture.name} onClick={this._changeCurrentPicture(picture)} />
    </div>

  _changeCurrentPicture = (picture: TMoltinImage): Function => () => {
    this.setState({ currentPicture: picture })
  }

  _addProduct = (): void => {
    const { product } = this.props
    this.store.dispatch(addProduct(product))
  }
}
