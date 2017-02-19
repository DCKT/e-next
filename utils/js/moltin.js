import type { TMoltinProduct } from './types'

const moltin = require('moltin')({
  publicId: process.env.ENEXT_MOLTIN_PUBLIC,
  secretKey: process.env.ENEXT_MOLTIN_PRIVATE
})

const Authenticate = cb => moltin.Authenticate((data) => cb())

export const fetchProducts = (): Promise<Array<TMoltinProduct>> =>
  new Promise((resolve, reject) => {
    Authenticate(() => {
      moltin.Product.List(null, data => resolve(data), error => reject(error))
    })
  })

export const fetchProduct = (id: string): Promise<TMoltinProduct> =>
  new Promise((resolve, reject) => {
    Authenticate(() => {
      moltin.Product.Get(id, data => resolve(data), error => reject(error))
    })
  })

type TAddCartOptions = {
  id: string,
  quantity: number
}

export const getCart = (cartId: string): Promise<TMoltinCart> =>
  new Promise((resolve, reject) => {
    Authenticate(() => {
      if (cartId) {
        moltin.Cart.cartId = cartId
      }

      moltin.Cart.Contents(items => resolve(items), error => reject(error))
    })
  })

export const addProductToCart = (options: TAddCartOptions): Promise<TMoltinProduct> =>
  new Promise((resolve, reject) => {
    Authenticate(() => {
      moltin.Cart.Insert(options.id, options.quantity, null, cart => {
        resolve(cart)
      }, error => reject(error))
    })
  })
