import React from 'react';
import Message from '../Message';
import './style.css';

export default function MessageList(props) {
  const messages = props.messages;
  const endOfMessages = React.useRef();

  React.useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * 메시지 렌더링 함수
   * @param {any} index react 리스트 key value
   * @param {number} user_id `user` 시퀀스
   * @param {string} text 채팅창에 입력한 텍스트
   */
  const renderMessage = (index, user_id, text) => {
    return <Message
      key={index}
      user_id={user_id}
      text={text}
    />
  }

  return (
    <div className="MessageList">
      {messages.map((msg, idx) => renderMessage(idx, msg.user_id, msg.text))}
      <div ref={endOfMessages} />
    </div>
  );
}