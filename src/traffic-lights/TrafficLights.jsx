import React from "react";
import TrafficLightContainer from "./components/TrafficLightContainer";
import "./index.css";

const COLORS = {
  GREEN: "GREEN",
  RED: "RED",
  YELLOW: "YELLOW",
};

const config = {
  [COLORS.GREEN]: {
    backgroundColor: COLORS.GREEN,
    duration: 4000,
    next: COLORS.YELLOW,
  },
  [COLORS.YELLOW]: {
    backgroundColor: COLORS.YELLOW,
    duration: 1000,
    next: COLORS.RED,
  },
  [COLORS.RED]: {
    backgroundColor: COLORS.RED,
    duration: 4000,
    next: COLORS.GREEN,
  },
};

const TrafficLights = () => {
  return (
    <div className="pole">
      <TrafficLightContainer config={config} initialColor={COLORS.GREEN} />
    </div>
  );
};

export default TrafficLights;
