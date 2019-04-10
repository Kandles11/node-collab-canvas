var express = require('express');

var app = express();
var server = app.listen(process.env.PORT || 3000);
var usersCurrentMouseData = [];

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);
  for(var data of usersCurrentMouseData)
  {
    socket.emit('mouse',data);
  }

  socket.on('clear', clear);

  function clear(clearTF) {
    if (clearTF = true) {
    usersCurrentMouseData.length = 0;
  }
  }


  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    usersCurrentMouseData.push(data);
    console.log(data);
  }
}
