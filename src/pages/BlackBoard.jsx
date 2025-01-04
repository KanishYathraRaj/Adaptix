// src/App.js
import React, { useState } from 'react';
import ChatButton from '../components/ChatButton/ChatButton';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import HistoryButton from '../components/HistoryButton/HistoryButton';
import HistoryWindow from '../components/HistoryWindow/HistoryWindow';
import './BlackBoard.css';

const BlackBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isHistoryButtonOpen, setIsHistoryButtonOpen] = useState(true);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('<></>');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const closeChat = () => setIsChatOpen(false);

  const toggleHistory = () => setIsHistoryOpen(!isHistoryOpen);
  const closeHistory = () => setIsHistoryOpen(false);
  const toggleHistoryButton = () => setIsHistoryButtonOpen(!isHistoryButtonOpen);
  const toggleCodeGenerated = () => setIsCodeGenerated(true);

  const content = (
    <>
      <p className="animated-text">Welcome to Adaptix</p>
      <p className="animated-text2">Build Anything</p>
    </>
  );
  
  const blackboardStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: isHistoryOpen ? "260px" : "0px",
    transition: "left 0.5s ease",
  };

  return (
    <div style={isCodeGenerated ? { } : blackboardStyle}>
      <div className="editable">
        {content}
      </div>
      <div className="non-editable">
        <ChatButton toggleChat={toggleChat} />
        {isChatOpen &&
        <ChatWindow
          closeChat={closeChat} 
          toggleCodeGenerated={toggleCodeGenerated} 
          code={generatedCode} 
          setCode={setGeneratedCode}
          messages={messages}
          setMessages={setMessages}
        />}
        {isHistoryButtonOpen && <HistoryButton toggleChat={toggleHistory}  />}
        {isHistoryOpen && 
        <HistoryWindow 
          closeHistory={closeHistory}
          isOpen={isHistoryOpen}
          toggleHistoryButton={toggleHistoryButton}
        />}  
      </div>
    </div>
  );
}


export default BlackBoard;
