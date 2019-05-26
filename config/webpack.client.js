const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BASE_PATH = path.resolve(__dirname, '../src/')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  watch: mode === 'development',
  devtool: 'source-map',
  mode: mode,
  entry: [
    'webpack-hot-middleware/client',
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
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(BASE_PATH, './public/index.html'),
      filename: 'main.html',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'main.html'
    }
  }
}
