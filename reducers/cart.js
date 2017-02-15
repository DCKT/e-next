const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.data]
      }
    default:
      return state
  }
}
