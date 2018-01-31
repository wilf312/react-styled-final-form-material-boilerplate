const conf = require('./webpack.config')
const webpack = require('webpack')

let mergedConf = Object.assign({}, conf)

mergedConf.plugins.push(new webpack.optimize.UglifyJsPlugin())

module.exports = mergedConf
