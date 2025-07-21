import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="NSL Marine Logo" className="logo" />
      </div>

      <div className="nav-info">
        <a href="mailto:info@nslmarine.com" className="contact-link">
          <FaEnvelope className="icon" /> info@nslmarine.com
        </a>
        <a href="tel:+123456789" className="contact-link">
          <FaPhoneAlt className="icon" /> +123 456 789
        </a>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#coverage" onClick={() => setIsOpen(false)}>Coverage</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
