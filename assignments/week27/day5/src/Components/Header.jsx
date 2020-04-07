import React from 'react';
import './../css/Header.css';

export default function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Birt-purple-logo.png" width="50px" /></a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}