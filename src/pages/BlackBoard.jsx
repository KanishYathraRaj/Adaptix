// src/App.js
import React, { useState } from 'react';
import ChatButton from '../components/ChatButton/ChatButton';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import HistoryButton from '../components/HistoryButton/HistoryButton';
import './BlackBoard.css';

const BlackBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isHistoryButtonOpen, setIsHistoryButtonOpen] = useState(true);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const closeChat = () => setIsChatOpen(false);

  const toggleHistory = () => setIsHistoryOpen(!isHistoryOpen);
  const closeHistory = () => setIsHistoryOpen(false);
  const toggleHistoryButton = () => setIsHistoryButtonOpen(!isHistoryButtonOpen);

  return (
    <>
      <div className="editable">
        <p class="animated-text">Welcome to Adaptix</p>
        <p class="animated-text2">Build Anything</p>
      </div>
      <div className="non-editable">
        <ChatButton toggleChat={toggleChat} />
        {isChatOpen && <ChatWindow closeChat={closeChat} />}
        {isHistoryButtonOpen && <HistoryButton toggleChat={toggleHistory} />}
        {/* {isHistoryOpen && <HistoryWindow closeChat={closeHistory , toogleHistoryButton */}
      </div>
    </>
  );
}

export default BlackBoard;
