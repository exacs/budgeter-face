const path = require('path');

module.exports = {
  entry: './client/login.js',
  output: {
    filename: 'login.bundle.js',
    path: path.resolve(__dirname, 'app/static')
  }
};
