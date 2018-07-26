const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DynamicCDNWebpackPlugin = require('dynamic-cdn-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 5001,
  },
  watchOptions: {
    poll: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'unpkg-demos using webpack-react and dfsco-react-umd-lib',
      template: './public/index.html',
      filename: path.join(__dirname, 'build/') + 'index.html' //relative to root of the application
     }),
    new DynamicCDNWebpackPlugin()
  ]

  // plugins: [
  //   new HTMLWebpackPlugin({
  //     title: 'unpkg-demos :: webpack-react'
  //   }),
  //   new DynamicCDNWebpackPlugin()
  // ]
}
