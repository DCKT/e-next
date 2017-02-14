// @flow

import React from 'react'
import Link from 'next/link'
import { ROUTES } from '../constants/'

export default () => (
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
)
