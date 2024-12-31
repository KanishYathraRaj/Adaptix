import React, { useState } from 'react';
import './ChatWindow.css';

import { getCode } from '../CodeGeneration/CodeGeneration';

const ChatWindow = ({ closeChat }) => {
  const [messages, setMessages] = useState([]);

  const handleSend = (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.message.value;
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    getCode(newMessage);
    event.target.elements.message.value = '';
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>👋 Let's Chat</h3>
        <button className="close-btn" onClick={closeChat}>
          ✕
        </button>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'user' ? '🧑‍💻 ' : '🤖 '}
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="chat-input">
        <input
          type="text"
          name="message"
          placeholder="Type something..."
          required
        />
        <button type="submit">🚀</button>
      </form>
    </div>
  );
};

export default ChatWindow;
