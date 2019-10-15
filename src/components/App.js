import React from 'react';
import axios from 'axios';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './App.css';

axios.defaults.baseURL = 'https://tbot.ttb.co.kr';

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
  const [session, setSession] = React.useState(null);

  /**
   * Same function as componetDidMound() at class component
   */
  React.useEffect(() => {
    // 서버 핑 확인
    // TODO: 옛날 tbot 쓰는데 그거 버릴거 그러니까 아래도 바꿔야함
    axios.get('/api/message')
    .then(response => {
      console.log(response.data);
      setSession(response.data.session);
    })
    .catch(error => {
      console.log(error);
    });

    // return 을 주어서 unmount 때 세션을 삭제해야 하나?
  }, []);

  /**
   * MessageInput 컴포넌트 <input>
   * 사용자가 메시지 창에 입력을 할 때마다 text 값 설정
   * @param {string} value 텍스트 메시지
   */
  const handleInputTextChange = value => {
    setText(value);
  }

  /**
   * MessageInput 컴포넌트 <form>
   * submit 처리
   */
  const handleSendMessage = () => {
    // 공백만 있을 경우 아무 행동도 하지 않음
    if (!text.replace(/\s/g, '').length) {
      return;
    }

    // clear input text
    setText('');
    setMessages([...messages, {
      user_id: 1,
      text,
    }]);

    // 현재 버그가 있음
    // setMessages가 마지막 한 번만 동작함;;
    axios.post('/api/message', { text, session })
    .then(response => {
      setMessages([...messages, {
        user_id: 0,
        text: response.data.message,
      }]);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // ------------ renderer ------------ //
  return (
    <div className="App">
      <Header image="" />
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
