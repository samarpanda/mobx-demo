const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === "production";
const publicPath = require('../package.json').publicPath || "";

const basePlugins = [
  new HtmlWebpackPlugin({
    template: './client/index.html',
    inject: 'body',
    hash: true,
    minify: !isProduction ? false : {
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    '__DEV__': !isProduction,
    '__PUBLICPATH__': JSON.stringify(publicPath)
  })
];

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

module.exports = basePlugins.concat(isProduction ? productionPlugins : []);