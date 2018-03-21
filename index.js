const middleware = require('koa-webpack');
const config = require('./webpack.config.js');

const app = require('./app');

app.use(middleware({
  config: config
}));

app.listen(3000);
