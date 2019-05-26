const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const BASE_PATH = path.resolve(__dirname, '../src/')

module.exports = {
  devtool: 'cheap-source-map',
  mode: 'production',
  entry: [
    path.resolve(BASE_PATH, 'client/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(BASE_PATH, './public/index.html'),
      filename: 'main.html',
      hash: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
