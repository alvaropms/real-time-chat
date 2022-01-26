import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = process.env.REACT_APP_NEW_CHAT_MESSAGE_EVENT || "newMessage";
const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_SERVER_URL || "https://realtc-back.herokuapp.com";

function Connection(){
  const [messages, setMessages] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = socketIOClient(SOCKET_SERVER_URL);

    return () => {socket.current.disconnect();};
  }, []);

  function listenMessage(){
    socket.current.on(NEW_CHAT_MESSAGE_EVENT, (msg) => {
      setMessages(msg);
      var container = document.getElementById('container');
      var heightPage = container.scrollHeight;
      var scrollMax = heightPage - container.clientHeight;
      if( scrollMax - container.scrollTop < 0.5 * container.clientHeight){
        container.scrollTo(0 , heightPage);
      }
    });
  }

  function sendMessage(msg){
    socket.current.emit(NEW_CHAT_MESSAGE_EVENT, msg);
    
  }

  return { messages, sendMessage, listenMessage };
};

export default Connection;