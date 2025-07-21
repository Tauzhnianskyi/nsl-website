import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="NSL Marine Logo" />
          <span>NSL Marine Ltd.</span>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@nslmarine.com">
            <FaEnvelope className="icon" /> info@nslmarine.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NSL Marine Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
