import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
