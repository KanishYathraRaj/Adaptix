// src/App.js
import React, { useState } from 'react';
import ChatButton from '../components/ChatButton/ChatButton';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import './BlackBoard.css';

const BlackBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="BlackBoard typing-text">
      <p class="animated-text">Welcome to Adaptix</p>
      <p class="animated-text">Adapt this blackboard as you want</p>

      <ChatButton toggleChat={toggleChat} />
      {isChatOpen && <ChatWindow closeChat={closeChat} />}
    </div>
  );
}

export default BlackBoard;
