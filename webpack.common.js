'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index',
    another: './src/another-module'
  },

  output: {
    // path.resolve() provides the correct path
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'app'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // may be exclude field is not neccessary when used the include field???
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        use: {
          // -loader suffix is no longer optional
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          },
        },
      },
    ]
  },

  devtool: 'source-map',


  optimization: {
    // prevent duplication with splitChunks
    splitChunks: {
      chunks: 'all'
    },
  },

  plugins: [
    // delete old build
    new CleanWebpackPlugin(['dist']),
    // generate index.html
    new HtmlWebpackPlugin({
      title: 'My awesome App',
    }),
  ],
};