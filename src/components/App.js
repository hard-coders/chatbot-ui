import React from 'react';
import axios from 'axios';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './App.css';

axios.defaults.baseURL = 'https://tbot.ttb.co.kr';
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

/**
 * 회원의 기존 메시지 불러오기 제외
 * `user_id`가 0이면 봇, 1이면 게스트로 판정
 *
 * 추후 변경바람
 *
 * 2019.10.15 hy.lee hook으로 만들었다가 useState 버그로 인해 롤백..
 * 버그라기보다는 ajax fetch 하거나 다시 렌더링 할때 다른 기법을 써야함..너무 어려움..
 */
class App extends React.Component {
  state = {
    text: '',
    messages: dummies,
    session: '',
  }

  /**
   * Same function as componetDidMound() at class component
   */
  componentDidMount() {
    // 서버 핑 확인
    // TODO: 옛날 tbot 쓰는데 그거 버릴거 그러니까 아래도 바꿔야함
    axios.get('/api/message')
    .then(response => {
      console.log(response.data);
      this.setState({session: response.data.session});
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleInputTextChange = value => {
    // setText(value);
    this.setState({text: value});
  }

  /**
   * MessageInput 컴포넌트 <form>
   * submit 처리
   */
  handleSendMessage = () => {
    // 공백만 있을 경우 아무 행동도 하지 않음
    if (!this.state.text.replace(/\s/g, '').length) {
      return;
    }

    this.setState({
      text: '',
      messages: [...this.state.messages, {
        user_id: 1,
        text: this.state.text,
      }],
    });

    // send message
    axios.post('/api/message', { text: this.state.text, session: this.state.session })
    .then(response => {
      this.setState({
        messages: [...this.state.messages, {
          user_id: 0,
          text: response.data.message,
        }]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Header image="" />
        <MessageList messages={this.state.messages} />
        <MessageInput
          onChange={this.handleInputTextChange}
          onSubmit={this.handleSendMessage}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
