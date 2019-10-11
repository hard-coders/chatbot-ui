import React from 'react';
import Message from '../Message';
import './style.css';

export default function MessageList() {
  const dummies = [
    {
      user_id: 0,
      text: 'Greetings 😀'
    },
    {
      user_id: 1,
      text: 'Hi, there'
    },
    {
      user_id: 0,
      text: 'Hi, it is an honor to see you!'
    },
    {
      user_id: 1,
      text: 'How\'s going?'
    },
    {
      user_id: 0,
      text: 'Good, thanks for asking!'
    },


    {
      user_id: 0,
      text: 'Greetings 😀'
    },
    {
      user_id: 1,
      text: 'Hi, there'
    },
    {
      user_id: 0,
      text: 'Hi, it is an honor to see you!'
    },
    {
      user_id: 1,
      text: 'How\'s going?'
    },
    {
      user_id: 0,
      text: 'Good, thanks for asking!'
    },
    {
      user_id: 0,
      text: 'Greetings 😀'
    },
    {
      user_id: 1,
      text: 'Hi, there'
    },
    {
      user_id: 0,
      text: 'Hi, it is an honor to see you!'
    },
    {
      user_id: 1,
      text: 'How\'s going?'
    },
    {
      user_id: 0,
      text: 'Good, thanks for asking!'
    },
  ]
  const [messages, setMessages] = React.useState(dummies);

  React.useEffect(() => {
    var chatLog = document.querySelectorAll('.MessageList');
    chatLog[0].scrollTop = chatLog[0].scrollHeight;
  });

  return (
    <div className="MessageList">
      {messages.map((msg, idx) => <Message
        key={idx}
        user_id={msg.user_id}
        text={msg.text}
      />)}
    </div>
  );
}