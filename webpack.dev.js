const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const whm = 'webpack-hot-middleware/client';

module.exports = merge(common, {
  mode: 'development',

  entry: {
    login: [whm, common.entry.login],
    dashboard: [whm, common.entry.dashboard],
  }
});
