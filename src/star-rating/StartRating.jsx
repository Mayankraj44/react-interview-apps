import React, { useState } from "react";
import "./index.css";
import Star from "./components/Star";

const StartRating = () => {
  const [starRating, setStarRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(null);

  const handleClick = (e, ind) => {
    console.log(e);
    setStarRating(ind);
  };
  const handleHover = (ind) => {
    setHoverStar(ind);
  };
  console.log(hoverStar);
  return (
    <div className="star-container">
      {[...Array(5).keys()].map((val) => (
        <Star
          key={val}
          active={val < (hoverStar || starRating)}
          onClickHandler={(e) => handleClick(e, val + 1)}
          onHoverHandler={() => handleHover(val + 1)}
          onHoverOutHandler={() => handleHover(null)}
        />
      ))}
    </div>
  );
};

export default StartRating;
