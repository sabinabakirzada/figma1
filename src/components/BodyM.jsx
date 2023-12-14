import React from "react";
import "./BodyM.css";
import Card from "./Card";
const BodyM = () => {
  return (
    <div className="container">
      <bodym className="bodym">
        <div className="bodym-text">
          <h2 className="h2">Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <Card />
      </bodym>
    </div>
  );
};

export default BodyM;
