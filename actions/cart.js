// @flow
import { CART } from '../constants/index'
import * as Moltin from '../utils/js/moltin'
import type { TMoltinProduct } from '../utils/js/types'

export const setCartId = (cartId: string): Function => (dispatch: Function): Promise<*> => {
  dispatch({ type: CART.SET_ID, data: cartId })

  return dispatch(getCart())
}

export const getCart = (): Function => (dispatch: Function, getState: Function): Promise<*> => {
  const { cart } = getState()

  return Moltin
    .getCart(cart.id)
    .then(cart => dispatch({ type: CART.GET_CART, data: cart }))
}

export const addProduct = (product: TMoltinProduct): Function => (dispatch: Function, getState: Function): Promise<*> => {
  return Moltin
    .addProductToCart({
      id: product.id,
      quantity: 1
    })
    .then(cartItem => {
      const { cart } = getState()
      console.log(cartItem)
      if (!cart.id) {
        window.localStorage.cartId = cartItem.id

        dispatch({ type: CART.SET_ID, data: cartItem.id })
      }

      Moltin
        .getCart(cart.id || cartItem.id)
        .then(cart => {
          console.log(cart)
          dispatch({ type: CART.ADD_PRODUCT, data: cart })
        })
    })
}
