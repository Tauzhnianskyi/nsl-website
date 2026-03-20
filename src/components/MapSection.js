import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geographies } from "../data/world-geo";
import "./MapSection.css";

const highlightedCountries = [
  "Ukraine", "Turkey", "Egypt", "South Africa", "Morocco", "Ethiopia", "Nigeria", "Ivory Coast",
  "United Arab Emirates", "Qatar", "Singapore", "China", "South Korea", "Australia", "Japan",
  "Chile", "Argentina", "Panama", "Brazil", "Bahamas", "Thailand", "Malaysia", "Indonesia",
  "Kenya", "Tanzania", "Ghana", "Tunisia",
  "Albania", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Iceland", "Ireland",
  "Italy", "Latvia", "Lithuania", "Malta", "Monaco", "Montenegro", "Netherlands", "Norway",
  "Poland", "Portugal", "Romania", "Slovenia", "Spain", "Sweden", "United Kingdom", "Georgia", 
  "Mexico", "Uruguay", "Liberia", "Côte d'Ivoire", "Togo", "Cameroon", "Bahrain",
  "Pakistan", "Algeria", "India"
];

const secondaryCountries = [
  "United States of America",
  "Canada"
];

function MapSection() {
  const [tooltip, setTooltip] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <section className="map-section" id="map">
      <h2>Coverage</h2>
      <div
        className="map-container"
        onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
      >
        <ComposableMap projectionConfig={{ scale: 160 }} width={980} height={450}>
          <Geographies geography={geographies}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const isHighlighted = highlightedCountries.includes(name);
                const isSecondary = secondaryCountries.includes(name);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (isSecondary) {
                        setTooltip(`${name} – In Progress`);
                      } else {
                        setTooltip(name);
                      }
                    }}
                    onMouseLeave={() => setTooltip("")}
                    style={{
                      default: {
                        fill: isHighlighted
                          ? "#00c2ff " // Основные
                          : isSecondary
                          ? "#ff7f50  " // Жёлтые
                          : "#7fa8c9  ", // Остальные
                        stroke: "#888",
                        strokeWidth: 0.5,
                        outline: "none"
                      },
                      hover: {
                        fill: isHighlighted
                          ? "#007bb8"
                          : isSecondary
                          ? "#e69500"
                          : "#bfbfbf",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {tooltip && (
          <div
            className="tooltip"
            style={{
              top: tooltipPos.y + 15,
              left: tooltipPos.x + 15
            }}
          >
            {tooltip}
          </div>
        )}
      </div>
    </section>
  );
}

export default MapSection;







