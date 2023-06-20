import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import './components/ChatEntry';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {

  const [messages, setMessages] = useState(chatMessages);
  
  const toggleLike = (id) => {
    const newMessages = messages.map(message =>{
      if (id === message.id) {
        return {
          ...message,
          liked: !message.liked
        }
      }
      return message
    });
    setMessages(newMessages);
  }
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog 
          entries={ messages }>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
