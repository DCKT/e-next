// @flow

import React from 'react'
import Link from 'next/link'
import { ROUTES } from '../constants/'
import classNames from 'classnames'

type State = {
  isMenuVisible: boolean
}

export default class Header extends React.Component {
  state: State

  constructor () {
    super()

    this.state = {
      isMenuVisible: false
    }
  }

  render () {
    const { isMenuVisible } = this.state
    const burgerClassName = classNames('nav-toggle', {
      'is-active': isMenuVisible
    })

    const navRightClassName = classNames('nav-right nav-menu', {
      'is-active': isMenuVisible
    })

    return (
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

        <span className={burgerClassName} onClick={this._toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={navRightClassName}>
          <a className='nav-item' href={ROUTES.STATICS.FAQ}>
            FAQ
          </a>
        </div>
      </nav>
    )
  }

  _toggleMenu = (): void => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }
}
