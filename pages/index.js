import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'

export default class Home extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const products = await Moltin.fetchProducts()
    console.log(products)
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
        <section>

        </section>
      </Layout>
    )
  }
}
