var express = require('express');
var app = express();

var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
  socket.once('disconnect', () => {
    connections.splice(conections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Disconnected: %s sockets remaining', connections.length);
  });

  connections.push(socket);
  console.log("Connection: %s sockets connected", connections.length);
});

console.log('Polling server is running on http://localhost:3000/');
