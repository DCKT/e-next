// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Header from './Header'
import Footer from './Footer'
import { initStore } from '../store'
import { Provider } from 'react-redux'

type Props = {
  children?: React$Element<*>,
  title: string,
  contentClassName?: ?string,
  isServer: boolean
}

Router.onRouteChangeStart = (url: string): void => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
  props: Props

  static async getInitialProps ({ renderPage, req }) {
    const isServer = !!req
    const store = initStore(null, isServer)

    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(null, props.isServer)
  }

  render () {
    const { title, contentClassName, children } = this.props

    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <title>{ `${title} - e-next` || 'e-next' }</title>
          </Head>

          <Header />

          <div className={contentClassName}>
            { children }
          </div>

          <Footer />
        </div>
      </Provider>
    )
  }
}
