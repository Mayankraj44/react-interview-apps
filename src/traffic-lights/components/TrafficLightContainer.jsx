import React, { useEffect, useState } from "react";
import Lights from "./Lights";

const TrafficLightContainer = ({ config, initialColor }) => {
  const [activeColor, setActiveColor] = useState(initialColor);

  useEffect(() => {
    const { next, duration } = config[activeColor];
    const timer = setTimeout(() => {
      setActiveColor(next);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeColor]);

  return (
    <div className="traffic-light-container">
      {Object.keys(config).map((color, ind) => (
        <Lights key={ind} color={color === activeColor && color} />
      ))}
    </div>
  );
};

export default TrafficLightContainer;
