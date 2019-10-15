import React from 'react';
import './style.css';

export default function Header(props) {
  const image = props.image || 'https://www.ttb.co.kr/resource/images/ttb.png';
  return (
    <div className="Header">
      <img
        src={image}
        className="Header-Logo"
        alt="logo"
      />
    </div>
  );
}