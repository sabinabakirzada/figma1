import React from "react";
import "./Footer.css";
import social from "../assets/social.svg";
const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-head">
        <h1 className="f-h2">Shortly</h1>
        <ul className="f-ul">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <p className="f-p1">
          <img className="social" src={social} />
        </p>
      </div>
      <div className="footer-list">
        <ul className="f-ul2 f-ull1">
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="f-ul2 f-ull2">
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="f-ul2 f-ull3">
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
