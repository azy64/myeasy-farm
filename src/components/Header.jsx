import React from 'react';
import logo from '../images/2-logo.png';

function Header() {
  return (
    <header className="header">
      <div>
        <a href="/">
          <img src={logo} title="app-logo" alt="logo" className="mef-logo" />
        </a>
      </div>
      <div />
    </header>
  );
}

export default Header;
