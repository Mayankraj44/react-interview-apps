import React from "react";
import { digitSegments } from "./helper";

const Digit = ({ value }) => {
  return (
    <div className="digit-container">
      {digitSegments?.[value]?.map((num) => (
        <div className={` digit digit-${num}`} key={num} />
      ))}
    </div>
  );
};

export default Digit;
