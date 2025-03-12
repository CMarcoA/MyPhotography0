// src/Navbar/Navbar.js
import React from "react";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import the specific icons
import "./Navbar.css"; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Frames within Frames</div>

      <div className="nav-links">
        <div className="nav-links-left">
          <li>
            <div href="#home">Home</div>
          </li>
          <li>
            <div href="#about">About Me</div>
          </li>
          <li>
            <div href="#contact">Contact</div>
          </li>
        </div>

        <div className="nav-links-right">
          <div className="social-icons">
            <button href="#" className="social-icon">
              <FaInstagram />
            </button>{" "}
            {/* Instagram Icon */}
            <button href="#" className="social-icon">
              <FaGithub />
            </button>{" "}
            {/* GitHub Icon */}
            <button href="#" className="social-icon">
              <FaWhatsapp />
            </button>{" "}
            {/* WhatsApp Icon */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
