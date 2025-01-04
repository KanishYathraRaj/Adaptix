import React, { useState } from 'react';
import './ChatWindow.css';

import { getCode } from '../CodeGeneration/CodeGeneration';

const ChatWindow = ({ closeChat, toggleCodeGenerated, code, setCode , messages , setMessages}) => {
  
  const [loading, setLoading] = useState(false);

  const handleSend = async (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.message.value;

    // Add the user's message to the chat
    setMessages([...messages, { text: newMessage, sender: 'user' }]);

    // Set loading state and add loading message to chat
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: 'Loading...', sender: 'bot' },
    ]);

    try {
      // Call getCode to generate code
      await getCode(newMessage, code, setCode);
      toggleCodeGenerated();

      // Remove the loading message
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.text !== 'Loading...')
      );

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Code generation complete!', sender: 'bot' },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.text !== 'Loading...')
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Failed to generate code.', sender: 'bot' },
      ]);
    } finally {
      // Remove the loading state
      setLoading(false);
    }

    // Clear the input field
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
          placeholder={loading ? 'Please wait...' : 'Type something...'}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          🚀
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
