const app = require('./app');
const io = require('./app/io');

if (process.env.NODE_ENV === 'development') {
  const middleware = require('koa-webpack');
  const config = require('./webpack.dev.js');
  app.use(middleware({
    config: config
  }));
}

const http = require('http').Server(app.callback());

io(http);
http.listen(3000);
