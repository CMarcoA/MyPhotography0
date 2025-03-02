import React from "react";
import "./Homepage.css"; // Optional, for styling specific to Homepage
import eyeImage from "./eye.jpg"; // Import the image

function Homepage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="title">
          <h1>DAILY BUGLE</h1>
        </div>
      </header>
      {/* Separate section for the eye image */}
      <div className="eye-section">
        <img src={eyeImage} alt="Eye" className="eye-image" />
      </div>
    </div>
  );
}

export default Homepage;
