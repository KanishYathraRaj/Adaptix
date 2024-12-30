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
    <>
      <div className="editable">
        <p class="animated-text">Welcome to Adaptix</p>
        <p class="animated-text">
          <span class="sculpt">Sculpt</span>&nbsp; or &nbsp;
          <span class="scribble">Scribble</span>&nbsp; the &nbsp;
          <span class="blackboard">Blackboard</span>
        </p>
      </div>
      <div className="non-editable">
        <ChatButton toggleChat={toggleChat} />
        {isChatOpen && <ChatWindow closeChat={closeChat} />}
      </div>
    </>
  );
}

export default BlackBoard;
