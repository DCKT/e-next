// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import ProductListItem from '../components/ProductListItem'
import type { TMoltinProduct } from '../utils/js/types'

export default class Home extends React.Component {
  static async getInitialProps ({ query }) {
    const id = query.id ? query.id : query.slug.split('_')[1]
    const product = await Moltin.fetchProduct(id)

    return { product }
  }

  render () {
    const { product } = this.props
    const { title, description, brand } = product

    return (
      <Layout title={title}>
        <section className='section'>
          <div className='container'>
            <div className='heading'>
              <h1 className='title'>{ title }</h1>
              <h2 className='subtitle'>{ brand.value }</h2>
            </div>
            <p className='content'>
              { description }
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}
