/**
 * Return a promise that fullfiles with the argument if the e-mail exists.
 *
 * The promise fails otherwise.
 */
function checkEmail(email) {
  return Promise.resolve(true);
}

/**
 * Generate a random code
 */
function generateCode() {
  return Promise.resolve(Math.floor(Math.random()*10000));
}

/**
 * Saves the pair email-code into the database
 */
function saveCode(email, code) {
  return Promise.resolve();
}

/**
 * Sends a code vía email
 */
function sendCode(email, code) {
  return Promise.resolve();
}


/**
 * Endpoint for "login"
 */
module.exports = async function login (ctx) {
  console.log('ENDPOINT login');
  if (!ctx.is('json')) {
    console.log('JSON not given');
    ctx.status = 406;
    ctx.body = {
      message: 'Only JSON is accepted'
    }
    return;
  }
  const email = 'hi@example.com';
  const exist = await checkEmail(email);
  if (exist) {
    const code = await generateCode();
    await saveCode(code);
    await sendCode(email, code);

    // Success
  } else {
    // Error
  }

  ctx.status = 200;
  ctx.body = {
    message: 'Success. An e-mail is sent with the login code'
  }
}
