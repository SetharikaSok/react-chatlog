import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import './components/ChatEntry';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatMessage = chatMessages[0]
  console.log(chatMessage)
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
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
