import React from "react";

const Star = ({
  active,
  onClickHandler,
  onHoverHandler,
  onHoverOutHandler,
}) => {
  return (
    <div
      className={`star ${active && "full"}`}
      onClick={onClickHandler}
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverOutHandler}
    ></div>
  );
};

export default Star;
