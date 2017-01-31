const path = require('path')
const loaders = require('./webpack/loaders')
const plugins = require('./webpack/plugins')
const publicPath = require('./package.json').publicPath;

const config = module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.tsx')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      'src/',
      'node_modules/'
    ]
  },
  module: {
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.ttf,
      loaders.woff
    ]
  },
  plugins: plugins,
  performance: {
    hints: false
  },
  devServer: {
    proxy: {

    },
    historyApiFallback:{
      index: publicPath
    },
    host: 'localhost',
    port: 8080,
    compress: true,
    open: true
  }
}