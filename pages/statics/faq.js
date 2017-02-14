import React, { Component } from 'react'
import Layout from '../../components/Layout'

export default class About extends Component {
  // Add some delay
  static async getInitialProps () {
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    return {}
  }

  render () {
    return (
      <Layout title='FAQ'>
        <p>This is about Next!</p>
      </Layout>
    )
  }
}
