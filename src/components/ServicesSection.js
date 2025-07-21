import React from "react";
import "./ServicesSection.css";
import { FaShip, FaDollarSign, FaHandsHelping, FaShieldAlt } from "react-icons/fa";


function ServicesSection() {
  const services = [
    {
      icon: <FaShip />,
      title: "Hold Cleaning",
      description: "Professional hold cleaning to meet industry and chartering standards."
    },
    {
      icon: <FaDollarSign />,
      title: "Marine Financial Solutions",
      description: "Managing disbursements and financial operations for shipowners and charterers."
    },
    {
      icon: <FaHandsHelping />,
      title: "Investment Services",
      description: "Strategic maritime investments to grow and secure your business."
    },
    {
      icon: <FaShieldAlt />,
      title: "Protective Agency Service",
      description: "Protecting interests of shipowners and charterers worldwide."
    }
  ];

  return (
    <section className="services-container" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
