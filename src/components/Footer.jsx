import React from "react";
import "./Footer.css";
import social from "../assets/social.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <h1 className="f-h1">Shortly</h1>
        <ul className="f-ul">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <p className="f-p1">
          <img src={social} />
        </p>
      </div>
      <div className="footer-list">
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
