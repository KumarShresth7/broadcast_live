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
    <div className="flex flex-col h-screen p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Chat Room</h2>
      
      <div className="flex flex-col flex-grow overflow-y-auto bg-gray-800 rounded-lg p-4 mb-4 shadow-inner">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-2 p-2 bg-gray-700 rounded-lg shadow-md text-sm text-white break-words"
          >
            {msg}
          </div>
        ))}
      </div>
      
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-3 bg-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-lg text-white font-semibold transition duration-150"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
