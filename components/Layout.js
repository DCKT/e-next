// @flow
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React$Element<*>,
  title: string,
  contentClassName: ?string
}

Router.onRouteChangeStart = (url: string): void => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default (props: Props) => (
  <div>
    <Head>
      <meta charset='utf-8' />
      <link rel='canonical' href='/' />
      <meta name='viewport' content='width=device-width,minimum-scale=1' />
      <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' />
      <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
      <link rel='stylesheet' href='/static/css/font-awesome.min.css' />
      <title>{ props.title || 'e-next' }</title>
    </Head>
    <Header />

    <div className={props.contentClassName}>
      { props.children }
    </div>

    <Footer />
  </div>
)
