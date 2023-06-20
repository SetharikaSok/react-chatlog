import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import './components/ChatEntry';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatMessage = chatMessages[0]
  // console.log(chatMessage)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
          body={chatMessage.body}  
          sender={ chatMessage.sender } 
          timeStamp={ chatMessage.timeStamp }>
        </ChatEntry>
        <ChatLog 
          entries={chatMessages}
        >
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
