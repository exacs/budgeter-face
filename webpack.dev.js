const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const whm = 'webpack-hot-middleware/client';

module.exports = merge(common, {
  mode: 'development',

  entry: {
    login: [common.entry.login],
    dashboard: [common.entry.dashboard],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
