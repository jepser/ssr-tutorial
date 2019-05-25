const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BASE_PATH = path.resolve(__dirname, '../src/')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  watch: mode === 'development',
  devtool: 'source-map',
  mode: mode,
  entry: path.resolve(BASE_PATH, 'client/index.js'),
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
      filename: 'index.html',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 9000
  }
}
