import type { TMoltinProduct } from './types'

const moltin = require('moltin')({
  publicId: process.env.ENEXT_MOLTIN_PUBLIC,
  secretKey: process.env.ENEXT_MOLTIN_PRIVATE
})

const sdk = moltin.Authenticate(() => {
  console.info('Moltin authenticated !')
})


export const fetchProducts = (): Promise<Array<TMoltinProduct>> =>
  new Promise((resolve, reject) => {
    sdk.Product.List(null, data => resolve(data), error => reject(error))
  })

export const fetchProduct = (id: string): Promise<TMoltinProduct> =>
  new Promise((resolve, reject) => {
    sdk.Product.Get(id, data => resolve(data), error => reject(error))
  })

