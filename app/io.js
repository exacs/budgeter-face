const socketIO = require('socket.io');
const { loginWithEmail } = require('./data/login');

module.exports = function (http) {
  const io = socketIO(http);

  io.on('connection', socket => {
    console.log('a user connected');

    socket.on('login', async email => {
      console.log('Here is a person trying to log in...');
      console.log(socket.id);
      console.log(email);

      await loginWithEmail(email, socket);
    });
  });
}
