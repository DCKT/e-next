// @flow

import React from 'react'
import { ROUTES } from '../constants/'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { StyleSheet, css } from 'aphrodite'
import Link from 'next/link'
import Minicart from './Minicart'
import type { TMoltinCart } from '../utils/js/types'
import { getCart } from '../actions/cart'

type Props = {
  cart: TMoltinCart,
  dispatch: Function
}

type State = {
  isMenuVisible: boolean,
  isMiniCartVisible: boolean
}

class Header extends React.Component {
  props: Props;
  state: State;

  constructor (props: Props) {
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

    return (
      <div>
        <nav className='nav has-shadow'>
          <div className='container'>
            <span className={burgerClassName} onClick={this._toggleMenu}>
              <span />
              <span />
              <span />
            </span>

            <div className='nav-left'>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-mobile'>
                  Product lists 1
                </a>
              </Link>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-mobile'>
                  Product lists 2
                </a>
              </Link>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-tablet'>
                  <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
                </a>
              </Link>
            </div>

            <div className='nav-center'>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-mobile'>
                  <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
                </a>
              </Link>
              <a className='nav-item is-hidden-tablet' onClick={this._toggleMiniCart}>
                <Button icons='shopping-cart' className={css(!cart && styles.noHover)}>
                  <span>
                    { cart && cart.total_items }
                  </span>
                </Button>
              </a>
            </div>

            <div className={navRightClassName}>
              <a className='nav-item is-hidden-mobile' onClick={this._toggleMiniCart}>
                <Button icons='shopping-cart' className={css(!cart && styles.noHover)}>
                  <span>
                    { cart && cart.total_items }
                  </span>
                </Button>
              </a>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-tablet'>
                  Product lists 1
                </a>
              </Link>
              <Link href={ROUTES.HOME}>
                <a className='nav-item is-hidden-tablet'>
                  Product lists 2
                </a>
              </Link>
            </div>
          </div>
        </nav>
        <div className={css(styles.minicartOverlay, isMiniCartVisible && styles.minicartOverlayVisible)} onClick={this._toggleMiniCart} />
        <div className={css(styles.minicart, isMiniCartVisible && styles.minicartVisible)}>
          { cart && <Minicart cart={cart} closeMinicart={this._toggleMiniCart} /> }
        </div>
      </div>
    )
  }

  _toggleMenu = (): void => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }

  _toggleMiniCart = (): void => {
    if (this.props.cart) {
      this.setState({ isMiniCartVisible: !this.state.isMiniCartVisible })
    }
  }
}

const styles = StyleSheet.create({
  minicartOverlay: {
    position: 'fixed',
    top: '0%',
    right: '0%',
    background: 'rgba(24,24,24, .5)',
    opacity: 0,
    transition: 'all .3s ease-out',
    zIndex: 3
  },
  minicartOverlayVisible: {
    opacity: 1,
    transition: 'all .3s ease-in',
    width: '100%',
    height: '100%'
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
    zIndex: 4
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

const mapStateToProps = ({ cart }) => ({
  cart: cart.instance
})

export default connect(mapStateToProps)(Header)
