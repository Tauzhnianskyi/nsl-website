import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-container" id="home">
      {/* Видео фон через iframe */}
      <div className="video-background">
        <iframe
          src="https://player.vimeo.com/video/1102950719?autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Ocean Background Video"
        ></iframe>
      </div>

      {/* Overlay затемнение */}
      <div className="overlay"></div>

      {/* Контент поверх видео */}
      <div className="hero-content">
        <h1>Welcome to NSL Marine Ltd.</h1>
        <p>Hold Cleaning • Investments • Marine Financial Solutions</p>
      </div>
    </section>
  );
}

export default HeroSection;
