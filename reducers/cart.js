import { CART } from '../constants/index'

const initialState = {
  instance: null,
  id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD_PRODUCT:
      return {
        ...state,
        instance: action.data
      }
    case CART.GET_CART:
      return {
        ...state,
        instance: action.data
      }
    case CART.SET_ID:
      return {
        ...state,
        id: action.data
      }
    default:
      return state
  }
}
