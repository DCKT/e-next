// @flow
import type { TMoltinProduct } from '../utils/js/types'

export const addProduct = (product: TMoltinProduct): Function => (dispatch: Function): Promise<*> => {
  return dispatch({ type: 'CART_ADD_PRODUCT', data: product })
}
