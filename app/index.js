/**
 * The Web Application written in Koa
 */
const path = require('path');
const Koa = require('koa');
const _ = require('koa-route');
const render = require('koa-ejs');
const serve = require('koa-static');
const mount = require('koa-mount');
const koaBody = require('koa-body');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'view'),
  layout: false,
  viewExt: 'ejs'
});

app.use(koaBody());

app.use(mount('/static', serve(path.join(__dirname, 'static'))));

app.use(
  _.get('/private', async ctx => {
    await ctx.render('private');
  })
);

app.use(
  _.get('/login', async ctx => {
    await ctx.render('login');
  })
);

app.use(
  _.get('/confirm', async ctx => {
    await ctx.render('confirm');
  })
);

module.exports = app;
