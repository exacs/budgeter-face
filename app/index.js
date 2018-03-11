/**
 * The Web Application written in Koa
 */
const path = require('path');
const Koa = require('koa');
const _ = require('koa-route');
const render = require('koa-ejs');
const app = new Koa();

render(app, {
  root: path.join(__dirname, 'view'),
  layout: false,
  viewExt: 'ejs'
});

app.use(_.get('/private', async ctx => {
  await ctx.render('private');
}));

app.use(_.get('/login', async ctx => {
  await ctx.render('login');
}));

app.use(_.post('/login', async ctx => {
  ctx.body = 'POST /login';
}));

app.use(_.get('/confirm', async ctx => {
  await ctx.render('confirm');
}));


app.use(async ctx => {
  ctx.body = 'Hello World';
});

module.exports = app;
