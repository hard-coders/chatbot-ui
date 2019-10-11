import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './style.css';

export default function MessageInput(props) {
  // const addMessage = props.onSubmit;
  const [text, setText] = React.useState('');

  function handleInputText(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="MessageInput">
      <form onSubmit={handleSubmit} className="MessageInput-Form">
        <input
          type="text"
          className="MessageInput-Form-Text"
          placeholder="메시지를 입력하세요"
          value={text}
          onChange={handleInputText}
          autoFocus
        />
        <button
          className="MessageInput-Form-Button"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}