const path = require('path');
const common=require('./webpack.common');
const {merge}= require('webpack-merge')

module.exports = merge(common,{
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'publish'),
    compress: false,
    port: 9001,
  },
});