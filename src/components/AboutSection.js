import React, { useState } from "react";
import "./AboutSection.css";
import aboutBg from "../assets/about-image.jpg";

function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="about-container"
      id="about"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay"></div>
      <div className="about-content-wrapper">
        <div className="about-content">
          <h2>About NSL Marine Ltd.</h2>
          <p>
            NSL Marine Ltd. provides top-quality hold cleaning services, marine
            financial solutions, and strategic investments for shipowners and
            charterers worldwide. Our mission is to ensure efficiency, compliance,
            and safety at every step of your maritime operations.
          </p>
          <div className="about-btn-wrapper">
            <button className="about-btn" onClick={() => setIsOpen(!isOpen)}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Модалка */}
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setIsOpen(false)}></div>
          <div className={`inline-modal ${window.innerWidth < 768 ? "slide-up" : "slide-in-left"}`}>
            <h3>About NSL Marine Ltd.</h3>
            <p>
              At NSL Marine Ltd., we combine deep technical expertise with financial acumen
              to provide comprehensive solutions tailored to the maritime industry.
            </p>
            <p><strong>Our core services include:</strong></p>
            <ul>
              <li><strong>Hold Cleaning Services</strong> – Ensuring cargo holds meet the highest standards of cleanliness and readiness for the next voyage.</li>
              <li><strong>Marine Financial Solutions</strong> – Managing disbursements and operational expenses to protect owners’ and charterers’ interests globally.</li>
              <li><strong>Strategic Investments</strong> – Delivering reliable investment opportunities within the maritime sector for long-term growth.</li>
            </ul>
            <p>
              With a team of skilled professionals operating under strict international compliance standards, we guarantee safety, transparency, and operational excellence at every stage of your shipping process.
            </p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </>
      )}
    </section>
  );
}

export default AboutSection;
