'use strict';

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';




module.exports = {
  entry: {
    app: './src/index'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    library: 'app'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
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

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'My awesome App'
    }),
  ]
};