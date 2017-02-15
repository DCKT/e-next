// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import ProductListItem from '../components/ProductListItem'
import Button from '../components/Button'
import type { TMoltinProduct } from '../utils/js/types'

export default class Home extends React.Component {
  static async getInitialProps ({ query }) {
    const id = query.id ? query.id : query.slug.split('_')[1]
    const product = await Moltin.fetchProduct(id)

    return { product }
  }

  render () {
    const { product } = this.props
    const { title, description, brand, images } = product

    return (
      <Layout title={title}>
        <div className='container'>
          <div className='columns'>
            <div className='column is-half'>
              <img src={images[0].url.http} alt={images[0].name} />
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
                  <Button type='primary'>
                    Ajouter au panier
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
