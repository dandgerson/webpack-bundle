'use strict';

const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  watchOptions: {
    aggregateTimeout: 1000
  },

  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});