// @flow

import React from 'react'
import { ROUTES } from '../constants/'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { StyleSheet, css } from 'aphrodite'
import Link from 'next/link'
import Minicart from './Minicart'
import type { TMoltinProduct } from '../utils/js/types'

type Props = {
  cart: Array<TMoltinProduct>
}

type State = {
  isMenuVisible: boolean,
  isMiniCartVisible: boolean
}

class Header extends React.Component {
  props: Props
  state: State

  constructor (props) {
    super(props)

    this.state = {
      isMenuVisible: false,
      isMiniCartVisible: false
    }
  }

  render () {
    const { isMenuVisible, isMiniCartVisible } = this.state
    const { cart } = this.props
    const burgerClassName = classNames('nav-toggle', {
      'is-active': isMenuVisible
    })

    const navRightClassName = classNames('nav-right nav-menu', {
      'is-active': isMenuVisible
    })
    
    const cartButtonClassName = 

    return (
      <nav className='nav has-shadow'>
        <div className='nav-left'>
          <Link href={ROUTES.HOME}>
            <a className='nav-item'>
              <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
            </a>
          </Link>
        </div>

        <div className='nav-center'>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-github' />
            </span>
          </a>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-twitter' />
            </span>
          </a>
        </div>

        <span className={burgerClassName} onClick={this._toggleMenu}>
          <span />
          <span />
          <span />
        </span>

        <div className={navRightClassName}>
          <a className='nav-item' href={ROUTES.STATICS.FAQ}>
            FAQ
          </a>
          <a className='nav-item' onClick={this._toggleMiniCart}>
            <Button icons='shopping-cart' className={css(styles.noHover)}>
              <span>
                { cart && cart.products.length }
              </span>
            </Button>
          </a>
        </div>
        <div>
          <div className={css(styles.minicartOverlay, isMiniCartVisible && styles.minicartOverlayVisible)} onClick={this._toggleMiniCart} />
          <div className={css(styles.minicart, isMiniCartVisible && styles.minicartVisible)}>
            <Minicart products={cart.products} />
          </div>
        </div>
      </nav>
    )
  }

  _toggleMenu = (): void => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }

  _toggleMiniCart = (): void => {
    if (this.props.cart.products.length) {
      this.setState({ isMiniCartVisible: !this.state.isMiniCartVisible })
    }
  }
}

const styles = StyleSheet.create({
  minicartOverlay: {
    position: 'fixed',
    top: '0%',
    right: '0%',
    width: '100%',
    height: '100%',
    background: 'rgba(24,24,24, .5)',
    opacity: 0,
    transition: 'all .3s ease-out',
    zIndex: -1
  },
  minicartOverlayVisible: {
    opacity: 1,
    transition: 'all .3s ease-in',
    zIndex: 1
  },
  minicart: {
    position: 'fixed',
    right: '-300px',
    top: 0,
    width: '300px',
    height: '100%',
    background: 'white',
    transition: 'all .3s ease-out',
    boxShadow: '-2px 0px 4px rgba(24,24,24, .1)',
    zIndex: 2
  },
  minicartVisible: {
    right: '0px',
    transition: 'all .3s ease-in'
  },
  noHover: {
    cursor: 'default',
    border: 'none'
  }
})

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Header)
