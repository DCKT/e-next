const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENEXT_MOLTIN_PUBLIC': JSON.stringify(process.env.ENEXT_MOLTIN_PUBLIC),
        'process.env.ENEXT_MOLTIN_PRIVATE': JSON.stringify(process.env.ENEXT_MOLTIN_PRIVATE),
      })
    )

    return config
  }
}
