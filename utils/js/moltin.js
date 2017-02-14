const moltin = require('moltin')({
  publicId: process.env.ENEXT_MOLTIN_PUBLIC,
  secretKey: process.env.ENEXT_MOLTIN_PRIVATE
})

export default () => {
  moltin.Authenticate(() => {
    console.info('Moltin authenticated !')
  })
}
