import React from "react";
import "./Body.css";
const Body = () => {
  return (
    <div>
      <div className="body-t">
        <div className="body-t-left">
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="b-btn1">Get Started</button>
        </div>
        <div className="body-t-right">
          <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg" />
        </div>
      </div>

      <div className="input">
        <input type="text" placeholder="Shorten a link here" />
        <button className="b-btn2">Shorten It!</button>
      </div>
    </div>
  );
};

export default Body;
