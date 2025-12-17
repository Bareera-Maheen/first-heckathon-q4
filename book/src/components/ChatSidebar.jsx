import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatSidebar.module.css';

// --- Helper Components ---

const SvgIcon = ({ path, className, onClick }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    onClick={onClick}
  >
    <path d={path} />
  </svg>
);

const TypingIndicator = () => (
  <div className={styles.typingIndicator}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const AskAboutButton = ({ x, y, onClick }) => (
    <button
      className={styles.askButton}
      style={{ top: y, left: x }}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()} // Prevents button click from clearing selection
    >
      Ask about this
    </button>
  );

// --- Main ChatSidebar Component ---
const API_BASE_URL = 'http://localhost:8000';

const ChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you with the documentation today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [selection, setSelection] = useState({ x: 0, y: 0, show: false, text: '' });

  const [sessionId, setSessionId] = useState(() => {
    return localStorage.getItem('chatSessionId') || `session-${Date.now()}`;
  });

  useEffect(() => {
    localStorage.setItem('chatSessionId', sessionId);
  }, [sessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        const range = window.getSelection().getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelection({
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY + 5,
          show: true,
          text: selectedText,
        });
      } else {
        setSelection((s) => ({ ...s, show: false }));
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async (messageText) => {
    if (messageText.trim() === '') return;

    const userMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue(''); // Clear input after sending
    setIsTyping(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: messageText, session_id: sessionId, id: userMessage.id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error("Error sending message to backend:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the assistant. Please try again later.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = () => {
    sendMessage(inputValue);
  };

  const handleAskAboutSelection = () => {
    const question = `What can you tell me about this: "${selection.text}"?`;
    sendMessage(question);
    setSelection({ ...selection, show: false });
    setIsOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {selection.show && (
        <AskAboutButton
          x={selection.x}
          y={selection.y}
          onClick={handleAskAboutSelection}
        />
      )}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.toggleButtonHidden : ''}`}
        onClick={toggleSidebar}
        aria-label="Open chat"
      >
        <SvgIcon path="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        {/* --- Header --- */}
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.statusIndicator}></div>
            <span className={styles.headerTitle}>Doc Assistant</span>
          </div>
          <button onClick={toggleSidebar} className={styles.closeButton} aria-label="Close chat">
             <SvgIcon path="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </button>
        </div>

        {/* --- Message Area --- */}
        <div className={styles.messageArea}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
              <div className={styles.bubble}>
                {msg.text}
                <div className={styles.timestamp}>{msg.timestamp}</div>
              </div>
            </div>
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* --- Input Area --- */}
        <div className={styles.inputArea}>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Ask a question..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.sendButton} onClick={handleSendMessage} aria-label="Send message">
            <SvgIcon path="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
