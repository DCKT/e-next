// @flow
import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: React$Element<*>,
  title: string,
  contentClassName?: ?string
}

Router.onRouteChangeStart = (url: string): void => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
  props: Props;

  render () {
    const { title, contentClassName, children } = this.props

    return (
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
    )
  }
}
