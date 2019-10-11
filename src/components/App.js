import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './App.css';

function Header() {
  return (
    <div className="App-Header">
      <img
        src="https://www.ttb.co.kr/resource/images/ttb.png"
        className="App-Header-Logo"
        alt="logo"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
