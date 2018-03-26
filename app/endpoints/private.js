const { checkToken } = require('../data/login');
module.exports = async ctx => {
  const token = ctx.cookies.get('access_token');
  const correct = await checkToken(token);

  if (correct) {
    await ctx.render('private');
  } else {
    ctx.redirect('/login');
  }
};
