import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {

  const [messages, setMessages] = useState(chatMessages.map(message => {
    return {
      ...message,
      color: 'black'
    }
  }));
  
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
      return '0 ❤️s'
    }
    return `${totalLikesCount} ❤️s`;
  }

  const setColor = (who, color) => {
    console.log('in setColor')
    const newMessages = messages.map(message => {
      if (message.sender === who) {
        return {
          ...message,
          color: color,
        };
      };
      return {...message};
    })
    setMessages(newMessages);
  }
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section >
          <ColorChoice
            message={ messages[0] }
            setColorCallBack={setColor}>
          </ColorChoice>
          <p>{ totalLikes() }</p>
          <ColorChoice
            message={ messages[1] }
            setColorCallBack={setColor}>
          </ColorChoice>
        </section>
      </header>
      <main>
        <ChatLog
          entries={ messages }
          toggleLike={ toggleLike }>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
