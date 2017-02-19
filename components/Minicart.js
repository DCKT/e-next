// @flow

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Button from './Button'
import Link from 'next/link'
import type { TMoltinCart } from '../utils/js/types'

type Props = {
  cart: TMoltinCart,
  closeMinicart: () => void
}

export default class MiniCart extends React.Component {
  props: Props;
  _renderCartProduct: (product: Object, i: number) => React$Element<*>;

  render () {
    const { cart } = this.props

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.header)}>
          <h2 className={css(styles.headerTitle)}>My cart</h2>
        </div>
        <div className={css(styles.listContainer)}>
          {
            Object.keys(cart.contents).map((id, i) => this._renderCartProduct(cart.contents[id], i))
          }
        </div>
        <div className={css(styles.submit)}>
          <Button type='primary' className={`is-medium ${css(styles.submitButton)}`}>
            Purchase
          </Button>
        </div>
      </div>
    )
  }

  _renderCartProduct = (product: Object, i: number): React$Element<*> => (
    <div key={i} className={`columns is-mobile ${css(styles.product)}`}>
      <div className={`column is-3 ${css(styles.productPicture)}`}>
        <img src={product.images[0].url.http} alt={product.images[0].name} />
      </div>
      <div className={`column is-9 ${css(styles.productDetail)}`}>
        <span onClick={this.props.closeMinicart}>
          <Link href={`/product?id=${product.id}`} as={`/product/${product.slug}_${product.id}`}>
            <a>
              <strong>{ product.title }</strong>
            </a>
          </Link>
        </span>
        <p>
          Quantity : { product.quantity }
        </p>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'whitesmoke',
    padding: '20px 0px'
  },
  headerTitle: {
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  submit: {
    padding: '10px'
  },
  submitButton: {
    width: '100%'
  },
  product: {
    padding: '5px 10px'
  },
  productDetail: {
    textAlign: 'left'
  },
  listContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    padding: '10px 0px',
    overflow: 'scroll'
  }
})
