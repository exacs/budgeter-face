const middleware = require('koa-webpack');
const config = require('./webpack.config.js');

const app = require('./app');
const io = require('./app/io');

app.use(middleware({
  config: config
}));

const http = require('http').Server(app.callback());

io(http);
http.listen(3000);
