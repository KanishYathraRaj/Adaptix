import React from 'react';
import './HistoryWindow.css';
import Log from '../Log/Log';

const HistoryWindow = ({ closeHistory, isOpen }) => {

  const logs = [
    {
      id:1,
      title: 'login Page',
      code: '<p styles="color: red;">login Page</p>'
    },
    {
      id:2,
      title: 'Machine Learning',
      code: '<p styles="color: blue;background-color: black;">Learn Machine Learning</p>'
    },
    {
      id:3,
      title: 'Draw Cow',
      code: '<p styles="color: green;">Draw Cow</p>'
    }
  ]

  return (
    <div className={`history-window ${isOpen ? 'open' : ''}`}>
      <button className="history-close-btn" onClick={closeHistory}>
        {"<"}
      </button>

      <p className='sidebar-title'>Adaptix</p>

      <div className='new-chat'>
        <div className='new-chat-icon'>+</div>
        <div className='new-chat-text'>New Chat</div>
      </div>

      <div className="history-title">History</div>

      {logs.map((log) => (
        <Log key={log.id} title={log.title} code={log.code} />
      ))}
    </div>
  );
};

export default HistoryWindow;
