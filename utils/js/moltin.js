import type { TMoltinProduct } from './types'

const moltin = require('moltin')({
  publicId: process.env.ENEXT_MOLTIN_PUBLIC,
  secretKey: process.env.ENEXT_MOLTIN_PRIVATE
})

const Authenticate = cb => moltin.Authenticate(() => cb())

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

