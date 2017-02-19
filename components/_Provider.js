import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers/'
import { setCartId } from '../actions/cart'

let store = null
const isBrowser = typeof window !== 'undefined'
const middleware = [thunkMiddleware]
const composeEnhancers = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const wrapWithProvider = (PageComponent) => class extends Component {
  static propTypes = {
    initialState: PropTypes.object
  }

  static async getInitialProps (ctx) {
    const { req } = ctx
    const isServer = !!req
    const props = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {}

    if (isServer && typeof window === 'undefined') {
      store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)))
      props.initialState = store.getState()
    }
    return props
  }

  constructor (props) {
    super(props)

    if (process.env.NODE_ENV !== 'production') {
      middleware.push(createLogger({ collapsed: true }))
    }

    if (!store) {
      store = createStore(reducer, props.initialState, composeEnhancers(applyMiddleware(...middleware)))
    }

    if (typeof window !== 'undefined') {
      const { cartId } = window.localStorage

      if (cartId) {
        store.dispatch(setCartId(cartId))
      } else {
        window.localStorage.cartId = Date.now()
        store.dispatch(setCartId(cartId))
      }
    }
  }

  render () {
    return (
      <Provider store={store}>
        <PageComponent {...this.props} />
      </Provider>
    )
  }
}

export default (mapStateToProps, mapDispatchToProps) => (PageComponent) => {
  PageComponent = connect(mapStateToProps, mapDispatchToProps)(PageComponent)
  return wrapWithProvider(PageComponent)
}
