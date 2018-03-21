const path = require('path');

module.exports = {
  entry: ['webpack-hot-middleware/client', './client/login.js'],

  output: {
    filename: 'login.bundle.js',
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
