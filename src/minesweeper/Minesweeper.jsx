import React from "react";
import "./index.css";

import { useState } from "react";
import DifficultyChooser from "./components/DifiicultyChooser";
import Board from "./components/Board";

const Minesweeper = () => {
  const [isDifficultySelected, setIsDifficultySelected] = useState(null);
  const [size, setSize] = useState(1)

  return (
    <div className="minesweeper-root">
      <div>
        {/* {isDifficultySelected ? (
         <Board size  />
        ) : (
          <DifficultyChooser onDifficultySelect={() => setIsDifficultySelected(true)} />
        )} */}
        {/* <div> Reset</div> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => { setSize(prev => prev + 0.1) }} >+</button>
          <button onClick={() => { setSize(prev => prev - 0.1) }} >-</button>
        </div>
        <div style={{ transform: `scale(${size})`, transformOrigin: 'top center' }}>
          <Board size={10} minesCount={10} />
        </div>

      </div>
    </div>
  );
};

export default Minesweeper;
