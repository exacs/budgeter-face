/**
 * The Web Application written in Koa
 */
const Koa = require('koa');
const _ = require('koa-route');
const app = new Koa();

app.use(_.get('/private', async ctx => {
  ctx.body = 'GET /private';
}));

app.use(_.get('/login', async ctx => {
  ctx.body = 'GET /login';
}));

app.use(_.post('/login', async ctx => {
  ctx.body = 'POST /login';
}));

app.use(_.get('/confirm', async ctx => {
  ctx.body = 'GET /confirm';
}));


app.use(async ctx => {
  ctx.body = 'Hello World';
});

module.exports = app;
