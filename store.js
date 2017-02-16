import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import cart from './reducers/cart'

let store = null
const isBrowser = typeof window !== 'undefined'
const middleware = [thunkMiddleware]
const composeEnhancers = isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  cart
})

export const initStore = (initialState, isServer) => {
  if (isServer && !isBrowser) {
    return createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
  } else {
    if (process.env.NODE_ENV !== 'production') {
      middleware.push(createLogger({ collapsed: true }))
    }

    if (!window.store) {
      window.store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
    }
    return window.store
  }
}
