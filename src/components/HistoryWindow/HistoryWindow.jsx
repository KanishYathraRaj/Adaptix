import React from 'react';
import './HistoryWindow.css';

const HistoryWindow = ({ closeHistory, isOpen }) => {
  return (
    <div className={`history-window ${isOpen ? 'open' : ''}`}>
      <button className="history-close-btn" onClick={closeHistory}>
        {"<"}
      </button>
    </div>
  );
};

export default HistoryWindow;
