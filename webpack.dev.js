'use strict';

const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // point the webpack in wich mode it should bundling
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          /*
          ** if we set MiniCssExtractPlugin instead style-loader
          ** HMR will not working with styles, so we must use the
          ** style-loader in development mode with HMR
          */
          // last compiling
          'style-loader',
          // second compiling
          'css-loader',
          // first compiling
          'sass-loader',
        ]
      },
    ]
  },

  watchOptions: {
    aggregateTimeout: 1000,
  },

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});