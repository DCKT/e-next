// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import ProductListItem from '../components/ProductListItem'
import type { TMoltinProduct } from '../utils/js/types'
import { StyleSheet, css } from 'aphrodite'
import providerConnect from '../components/_Provider'

type Props = {
  products: Array<TMoltinProduct>,
  initialState: Object,
  isServer: boolean
}

class Home extends React.Component {
  props: Props
  store: Object
  _renderProducts: (product: TMoltinProduct, i: number) => React$Element<*>

  static async getInitialProps ({ req }) {
    const products = await Moltin.fetchProducts()

    return { products }
  }

  render () {
    return (
      <Layout title='Home'>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                Welcome to e-next !
              </h1>
              <h2 className='subtitle'>
                Next.js ecommerce boilerplate
              </h2>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className={`heading ${css(styles.section)}`}>
              <h1 className='title'>Les derniers produits</h1>
              <h2 className='subtitle'>A ne pas manquer</h2>
            </div>
            <div className='columns'>
              { this.props.products.map(this._renderProducts) }
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  _renderProducts = (product: TMoltinProduct, i: number): React$Element<*> =>
    <div className='column is-3' key={i}>
      <ProductListItem data={product} />
    </div>
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 30
  }
})

export default providerConnect()(Home)
