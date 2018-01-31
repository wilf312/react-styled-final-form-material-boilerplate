const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.resolve(__dirname, '../src')
const dist = path.resolve(__dirname, '../dist')
const port = 3000

module.exports = {
  entry: src + '/app.js',

  output: {
    path: dist,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      src: src,
      page: src + '/component/page',
      atom: src + '/component/atom',
      molecule: src + '/component/molecule',
      organism: src + '/component/organism'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true
    }),
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ],

  devServer: {
    port
  }
}
