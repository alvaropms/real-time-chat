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

app.get('/', (req, res) => {
  res.send(`<h1>Hello world. Starting on port ${process.env.PORT || connection.PORT}</h1>`);
});

const NEW_CHAT_MESSAGE_EVENT = 'newMessage';

var messages = [];

const hoursInMiliseconds = 3.6 * Math.pow(10, 6);
var canDelete = true;
const deleteMessages = () => {
  if(canDelete){
    canDelete = false;
    setInterval( () => {
      messages = [];
      canDelete = true;
    }, 2 * hoursInMiliseconds)
  }
}

io.on('connection', (socket) => {
  socket.emit(NEW_CHAT_MESSAGE_EVENT, messages);
  deleteMessages();

    socket.on(NEW_CHAT_MESSAGE_EVENT, (msg) => {
      messages.push(msg);
      socket.emit(NEW_CHAT_MESSAGE_EVENT, messages);
      socket.broadcast.emit(NEW_CHAT_MESSAGE_EVENT, messages);
    });
});

server.listen(process.env.PORT || connection.PORT, () => {
  console.log(`listening on *:${process.env.PORT || connection.PORT}`);
});