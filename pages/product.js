// @flow
import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import Button from '../components/Button'
import { addProduct } from '../actions/cart'
import type { TMoltinProduct, TMoltinImage } from '../utils/js/types'

type Props = {
  product: TMoltinProduct,
  dispatch: () => any
}

type State = {
  currentPicture: TMoltinImage
}

class ProductDetails extends React.Component {
  props: Props
  state: State

  static async getInitialProps ({ query }) {
    const id = query.id ? query.id : query.slug.split('_')[1]
    const product = await Moltin.fetchProduct(id)

    return { product }
  }

  componentDidMount () {
    this.setState({ currentPicture: this.props.product.images[0] })
  }

  constructor () {
    super()

    this.state = {
      currentPicture: null
    }
  }

  render () {
    const { product } = this.props
    const { currentPicture } = this.state
    const { title, description, brand, images } = product

    return product ? (
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
                  <Button type='primary' onClick={this._addProduct}>
                    Ajouter au panier
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
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
    const { dispatch, product } = this.props
    dispatch(addProduct(product))
  }
}

export default connect()(ProductDetails)
