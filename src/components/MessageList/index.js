import React from 'react';
import Message from '../Message';
import './style.css';

export default function MessageList(props) {
  const messages = props.messages;

  React.useEffect(() => {
    // var chatLog = document.querySelectorAll('.MessageList');
    // chatLog[0].scrollTop = chatLog[0].scrollHeight;
    // setMessages(...messages, props.messages)
  });

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
    </div>
  );
}