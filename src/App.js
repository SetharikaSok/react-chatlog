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

  const totalLikes = () => {
    let totalLikesCount = 0;
    for (let message of messages) {
      totalLikesCount += message.liked;
    }
    if (totalLikesCount === 0) {
      return 0
    }
    return `${totalLikesCount} ❤️s`;
  }
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>Total Likes: { totalLikes() }</p>
        <ChatLog
          entries={ messages }
          toggleLike={ toggleLike }>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
