import React from 'react';
import './style.css';

export default function Message(props) {
  const text = props.text;
  const user_id = props.user_id;

  // 확장은 고려 안함. 봇이면 `user_id`가 0인 것으로 간주
  const classNames = 'Message Message-' + (user_id === 0 ? 'Left' : 'Right') + ' Message-Last';
  return (
    <div className={classNames}>
      {text}
    </div>
  );
}