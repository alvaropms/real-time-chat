const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
const connection = require('./connection');

const NEW_CHAT_MESSAGE_EVENT = 'newMessage';

var messages = [];

io.on('connection', (socket) => {
  socket.emit(NEW_CHAT_MESSAGE_EVENT, messages);

    socket.on(NEW_CHAT_MESSAGE_EVENT, (msg) => {
      messages.push(msg);
      socket.emit(NEW_CHAT_MESSAGE_EVENT, messages);
      socket.broadcast.emit(NEW_CHAT_MESSAGE_EVENT, messages);
    });
});

server.listen(connection.PORT, () => {
  console.log(`listening on *:${connection.PORT}`);
});