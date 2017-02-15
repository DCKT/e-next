// @flow

import React from 'react'
import { ROUTES } from '../constants/'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { StyleSheet, css } from 'aphrodite'
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
            <Button icons='shopping-cart'>
              <span>
                { cart && cart.products.length }
              </span>
            </Button>
          </a>
        </div>

        {
          isMiniCartVisible ? (
            <div>
              <div className={css(styles.minicartOverlay)} onClick={this._toggleMiniCart} />
              <div className={css(styles.minicart)}>
                <h3>My cart</h3>
              </div>
            </div>
          ) : null
        }
      </nav>
    )
  }

  _toggleMenu = (): void => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }

  _toggleMiniCart = (): void => {
    this.setState({ isMiniCartVisible: !this.state.isMiniCartVisible })
  }
}

const styles = StyleSheet.create({
  minicartOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(24,24,24, .5)'
  },
  minicart: {
    position: 'fixed',
    right: 0,
    top: 0,
    width: '300px',
    height: '100%',
    background: 'white'
  }
})

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(Header)
