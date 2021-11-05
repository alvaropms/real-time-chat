import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4200";

function connection(){
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socket = useRef();

  useEffect(() => {
    socket.current = socketIOClient(SOCKET_SERVER_URL);

    return () => {socket.current.disconnect();};
  }, []);

  function listenMessage(){
    socket.current.on(NEW_CHAT_MESSAGE_EVENT, (msg) => {setMessages(msg)});
  }

  function sendMessage(msg){
      socket.current.emit(NEW_CHAT_MESSAGE_EVENT, msg);
  }

  return { messages, sendMessage, listenMessage };
};

export default connection;