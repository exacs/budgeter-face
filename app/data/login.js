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
  const code = Math.floor(Math.random() * 10000);
  if (sockets[code]) {
    return generateCode();
  } else {
    return Promise.resolve(code);
  }
}

function saveCode(email, code) {
  sockets[code] = {
    email,
    socket
  }
  return Promise.resolve(code);
}

function sendCode(email, code) {
  return Promise.resolve();
}

async function loginWithEmail(email, socket) {
  return checkEmail(email)
    .then(generateCode)
    .then(code => saveCode(email, code))
    .then(code => sendCode(email, code));
}

function confirmCode(email, code) {
  if (sockets[code] && sockets[code].email === email) {
    const socket = sockets[code].socket;
    delete sockets[code];

    return socket;
  }
  return null;
}

module.exports = {
  loginWithEmail,
  confirmCode
}
