// src/ChatButton.js
import React, { useState } from 'react';
import './HistoryButton.css';

const HistoryButton = ({ toggleChat }) => {
  return (
    <button className="history-button" onClick={toggleChat}>
      {">"}
    </button>
  );
};

export default HistoryButton;
