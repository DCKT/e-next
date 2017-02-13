// @flow

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ROUTES } from '../constants/'

Router.onRouteChangeStart = (url: string): void => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  
  <div>
    <Head>
      <meta charset='utf-8' />
      <link rel='canonical' href='/' />
      <meta name='viewport' content='width=device-width,minimum-scale=1' />
      <link rel='stylesheet' type='text/css' href='/static/css/bulma.css' />
      <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
      <link rel='stylesheet' href='/static/css/font-awesome.min.css' />
    </Head>

    <nav className='nav has-shadow'>
      <div className='nav-left'>
        <a className='nav-item' href={ROUTES.HOME}>
          <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
        </a>
      </div>

      <div className='nav-center'>
        <a className='nav-item'>
          <span className='icon'>
            <i className='fa fa-github'></i>
          </span>
        </a>
        <a className='nav-item'>
          <span className='icon'>
            <i className='fa fa-twitter'></i>
          </span>
        </a>
      </div>

      <span className='nav-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className='nav-right nav-menu'>
        <a className='nav-item' href={ROUTES.STATICS.FAQ}>
          FAQ
        </a>
      </div>
    </nav>
  </div>
)
