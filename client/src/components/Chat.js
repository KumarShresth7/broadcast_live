import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL);

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", room);
    socket.on("receiveMessage", (data) => setMessages((prev) => [...prev, data]));
  }, [room]);

  const sendMessage = () => {
    socket.emit("sendMessage", { room, message });
    setMessage("");
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
