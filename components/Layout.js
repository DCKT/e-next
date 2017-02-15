// @flow
import Link from 'next/link'
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

export default (props: Props) => (
  <div>
    <Head>
      <title>{ `${props.title} - e-next` || 'e-next' }</title>
    </Head>

    <Header />

    <div className={props.contentClassName}>
      { props.children }
    </div>

    <Footer />
  </div>
)
