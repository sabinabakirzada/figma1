import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Shortly</h1>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="hd-btns">
        <button className="hd-btn1">Login</button>
        <button className="hd-btn2">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
