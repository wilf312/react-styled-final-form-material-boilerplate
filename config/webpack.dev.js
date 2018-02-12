const conf = require('./webpack.config')

const mergedConf = Object.assign({}, conf, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 3000
  }
})

module.exports = mergedConf
