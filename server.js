// jshint esversion: 6

var express = require('express');

var app = express();
var server = app.listen(process.env.PORT || 3000);
var usersCurrentMouseData = [];

var handshake;

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  //let handshake = socket.handshake;
  console.log('new connection: ' + socket.id);
  //console.log(handshake);

  socket.on('mouse', mouseMsg);
  for (var data of usersCurrentMouseData) {
    socket.emit('mouse', data);
  }

  socket.on('clear', function(data) {
    usersCurrentMouseData.length = 0;
    console.log(usersCurrentMouseData.length);
    io.sockets.emit('browserReload');
    console.log('sending reload');
  });



  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    usersCurrentMouseData.push(data);
    console.log(data);
  }
}
