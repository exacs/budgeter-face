const path = require('path');

module.exports = {
  entry: {
    login: './client/login.js',
    dashboard: './client/dashboard.js'
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
