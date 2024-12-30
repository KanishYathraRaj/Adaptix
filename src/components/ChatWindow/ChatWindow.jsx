// src/ChatWindow.js
import React, { useState } from 'react';
import './ChatWindow.css';

import { getCode } from '../CodeGeneration/CodeGeneration';

const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([]);

  const handleSend = (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.message.value;
    getCode(newMessage);
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    event.target.elements.message.value = '';
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button className="close-btn" onClick={closeChat}>X</button>
        <h3>Chat with us</h3>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="chat-input">
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
