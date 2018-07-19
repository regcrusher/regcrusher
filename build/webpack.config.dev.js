'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const autoprefixer = require('autoprefixer')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: ['./src/index.js', './assets/scss/app.scss'],
  mode: 'development',
  devServer: {
    hot: true,
    watchOptions: {
      poll: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('static/img'),
        to: resolve('dist/static/img'),
        toType: 'dir',
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}
