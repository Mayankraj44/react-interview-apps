import React, { useEffect, useMemo, useState } from "react";

//instead of using a state for active and inactive tiles just use the flat method and sequence state
// to calculate the active tiles as sequence will have all the active tiles index

const createGrid = (size, disabledList) => {
  return Array(size)
    .fill()
    .map((_, rowIndex) =>
      Array(size)
        .fill()
        ?.map((_, colIndex) => {
          const index = rowIndex * size + colIndex;
          if (disabledList.includes(index)) {
            return 0;
          }
          return 1;
        }),
    );
};

const Tile = ({ onClickHandler, active, disabled }) => {
  if (disabled) {
    return <div />;
  }
  return (
    <div
      className={` tile ${active ? "active" : "inactive"} `}
      onClick={() => !active && onClickHandler()}
    />
  );
};

const Grid2 = ({ size = 3, disabledList = [] }) => {
  const [sequence, setSequence] = useState([]);
  const [reversingFlag, setReversingFlag] = useState(false);

  const deactivateTile = () => {
    console.log("deactivate");
    setReversingFlag(true);
    const timer = setInterval(() => {
      setSequence((prev) => {
        const sequenceClone = [...prev];
        sequenceClone.pop();

        if (sequenceClone.length === 0) {
          clearInterval(timer);
          setReversingFlag(false);
        }
        return sequenceClone;
      });
    }, 300);
  };

  const handleTileClick = (index) => {
    const sequenceClone = [...sequence, index];
    setSequence(sequenceClone);
    if (sequenceClone?.length === tiles?.flat(1).filter(Boolean).length) {
      deactivateTile();
    }
  };

  const tiles = useMemo(() => {
    return createGrid(size, disabledList);
  }, []);

  console.log(tiles);

  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${tiles?.[0].length}, 1fr)` }}
    >
      {tiles?.flat(1)?.map((val, index) => (
        <Tile
          key={index}
          disabled={disabledList.includes(index)}
          active={sequence.includes(index)}
          onClickHandler={() => val && !reversingFlag && handleTileClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid2;
