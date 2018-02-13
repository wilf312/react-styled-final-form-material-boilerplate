const conf = require('./webpack.config')
const webpack = require('webpack')

let mergedConf = Object.assign({}, conf, {
  mode: 'production'
})

module.exports = mergedConf
