const socket = require('socket.io');

module.exports = function (http) {
  const io = socket(http);

  io.on('connection', function(socket){
    console.log('a user connected');
  });
}
