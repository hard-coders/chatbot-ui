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
  const dummies = [
    {
      user_id: 0,
      text: 'Greetings 😀'
    },
    {
      user_id: 1,
      text: 'Hi, there'
    },
  ]

  const [text, setText] = React.useState('');
  const [messages, setMessages] = React.useState(dummies);

  React.useEffect(() => {
    // 서버 핑 확인
    // 스크롤 다운
    // 서버에서 받은 메시지 추가
  });
  // 채팅 입력 후 메시지 추가

  // ------------ handlers ------------ //
  const handleInputTextChange = value => {
    setText(value);
    console.log('App module:', value);
  }

  const handleSendMessage = () => {
    setText('');
    setMessages([...messages, {
      user_id: 1,
      text,
    }]);
  }

  // ------------ renderer ------------ //
  return (
    <div className="App">
      <Header />
      <MessageList messages={messages} />
      <MessageInput
        onChange={handleInputTextChange}
        onSubmit={handleSendMessage}
        text={text}
      />
    </div>
  );
}

export default App;
