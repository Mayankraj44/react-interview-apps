import React from "react";

function RevolvingWord({ word }) {
  const duration = parseInt(word.length / 4);

  return (
    <div>
      {word.split("").map((char, ind) => (
        <span
          style={{ "--i": ind, animationDuration: `${duration}s` }}
          key={ind}
          className="spinning"
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default RevolvingWord;
