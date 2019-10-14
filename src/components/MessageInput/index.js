import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './style.css';

export default function MessageInput(props) {
  const text = props.text;

  // ------------ handlers ------------ //
  const handleChange = event => {
    props.onChange(event.target.value);
  }
  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit();
  }

  // ------------ renderer ------------ //
  return (
    <div className="MessageInput">
      <form onSubmit={handleSubmit} className="MessageInput-Form">
        <input
          type="text"
          className="MessageInput-Form-Text"
          placeholder="메시지를 입력하세요"
          value={text}
          onChange={handleChange}
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