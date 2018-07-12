const merge  = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  mode : 'development',

  entry : [
    'webpack-dev-server/client?http://localhost:8080',
    './client/src/index.jsx'
  ],

  devtool : 'inline-source-map',

  devServer : {
    contentBase : './client/dist',
    historyApiFallback: true
  }

});