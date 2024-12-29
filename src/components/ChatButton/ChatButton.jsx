// src/ChatButton.js
import React, { useState } from 'react';
import './ChatButton.css';

const ChatButton = ({ toggleChat }) => {
  return (
    <button className="chat-button" onClick={toggleChat}>
      💬
    </button>
  );
};

export default ChatButton;
