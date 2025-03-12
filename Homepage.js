import React from "react";
import "./Homepage.css"; // Optional, for styling specific to Homepage
import eyeImage from "./eye.jpg"; // Import the image
import Navbar from "../Navbar/Navbar";
import Gallery from "../Gallery/Gallery";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <div className="title">
          <h3>DAILY BUGLE</h3>
        </div>

        <div className="eye-section">
          <img src={eyeImage} alt="Eye" className="eye-image" />
        </div>
      </div>

      <div className="homepage-body">
        <div className="panels-class">
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="line"></div>
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default Homepage;
