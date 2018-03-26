const path = require('path');

module.exports = {
  entry: {
    login: ['webpack-hot-middleware/client', './client/login.js'],
    dashboard: ['webpack-hot-middleware/client', './client/dashboard.js']
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/static'),
    publicPath: '/static'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
