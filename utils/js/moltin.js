const moltin = require('moltin')({
  publicId: process.env.ENEXT_MOLTIN_PUBLIC,
  secretKey: process.env.ENEXT_MOLTIN_PRIVATE
})

export const authenticate = (cb) =>
  moltin.Authenticate(() => {
    console.info('Moltin authenticated !')
    cb()
  })

export const fetchProducts = (): Promise<*> =>
  new Promise((resolve, reject) => {
    authenticate(() => {
      moltin.Product.List(null, data => resolve(data), error => reject(error))
    })
  })
