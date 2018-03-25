const { confirmCode } = require('../data/login');

module.exports = async ctx => {
  const email = ctx.request.query.email;
  const code = ctx.request.query.code;
  console.log(email, code);

  const socket = confirmCode(email, code);

  if (socket) {
    console.log('ENDPOINT confirm > Login success');
    socket.emit('login_success');
  } else {
    console.log('ENDPOINT confirm > Not valid code or email');
  }
  await ctx.render('confirm');
};
