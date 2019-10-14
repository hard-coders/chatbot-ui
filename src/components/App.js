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

/**
 * 회원의 기존 메시지 불러오기 제외
 * `user_id`가 0이면 봇, 1이면 게스트로 판정
 *
 * 추후 변경바람
 */
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

  /**
   * 사용자가 메시지 창에 입력을 하는동안 text 값 설정
   * @param {string} value 텍스트 메시지
   */
  const handleInputTextChange = value => {
    setText(value);
  }

  /**
   * form의 submit 처리
   */
  const handleSendMessage = () => {
    // 공백만 있을 경우 아무 행동도 하지 않음
    if (!text.replace(/\s/g, '').length) {
      return;
    }

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
