var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
  console.log("Connection: %s", socket.id);
});

console.log('Polling server is running on http://localhost:3000/');
