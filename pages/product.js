// @flow
import React from 'react'
import Layout from '../components/Layout'
import * as Moltin from '../utils/js/moltin'
import ProductListItem from '../components/ProductListItem'
import type { TMoltinProduct } from '../utils/js/types'

export default class Home extends React.Component {
  static async getInitialProps (props) {
    console.log(props)

    return { }
  }

  render () {
    return (
      <Layout title='Product'>
        <section className='section'>
          <div className='container'>
            <div className='heading'>
              <h1 className='title'>Les derniers produits</h1>
              <h2 className='subtitle'>A ne pas manquer</h2>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
