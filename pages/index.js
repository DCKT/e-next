// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import Product from '../components/Product'
import type { TMoltinProduct } from '../utils/js/types'

export default class Home extends React.Component {
  static async getInitialProps () {
    const products = await Moltin.fetchProducts()
    console.log(products[0])
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
            <div className='heading'>
              <h1 className='title'>Les derniers produits</h1>
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
    <div className='column is-4'>
      <Product key={i} data={product} />
    </div>
}
