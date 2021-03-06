/**
 * Login module.
 *
 * Handle email non-password login.
 */
const sockets = {};

function checkEmail(email) {
  return Promise.resolve(true);
}

function generateCode() {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(1111);
  }

  const code = Math.floor(Math.random() * 10000);
  if (sockets[code]) {
    return generateCode();
  } else {
    console.log('CODE', code);
    return Promise.resolve(code);
  }
}

function saveCode(email, code, socket) {
  sockets[code] = {
    email,
    socket
  };
  return Promise.resolve(code);
}

function sendCode(email, code) {
  return Promise.resolve();
}

async function loginWithEmail(email, socket) {
  return checkEmail(email)
    .then(generateCode)
    .then(code => saveCode(email, code, socket))
    .then(code => sendCode(email, code));
}

function confirmCode(email, code) {
  if (sockets[code] && sockets[code].email === email) {
    const socket = sockets[code].socket;
    delete sockets[code];

    return { socket, token: 'secret' };
  } else {
    return null;
  }
}

function checkToken(token) {
  return Promise.resolve(token === 'secret');
}

module.exports = {
  loginWithEmail,
  confirmCode,
  checkToken
};
