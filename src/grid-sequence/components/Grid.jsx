import React, { useEffect, useState } from "react";

const createGrid = (size, disabledList) => {
  return Array(size)
    .fill()
    .map((_, rowIndex) =>
      Array(size)
        .fill()
        ?.map((_, colIndex) => {
          console.log(disabledList);

          if (
            disabledList.find(
              (val) => val[0] === rowIndex && val[1] === colIndex,
            )
          ) {
            return null;
          }
          return 0;
        }),
    );
};

const Grid = ({ size = 3, disabledList }) => {
  const [tiles, setTiles] = useState(createGrid(size, disabledList));
  const [sequence, setSequence] = useState([]);
  const [reversingFlag, setReversing] = useState(false);
  const handleTileClick = (rowIndex, colIndex) => {
    const tileClone = structuredClone(tiles);
    const sequenceClone = [[rowIndex, colIndex], ...sequence];
    tileClone[rowIndex][colIndex] = 1;
    setSequence(sequenceClone);
    setTiles(tileClone);
  };
  useEffect(() => {
    if (sequence.length === size * size - disabledList.length) {
      sequence.forEach((value, index) => {
        setTimeout(
          () => {
            setTiles((prev) => {
              const tileClone = structuredClone(prev);
              tileClone[value[0]][value[1]] = 0;
              return tileClone;
            });
            setSequence((prev) => {
              const sequenceClone = [...prev];
              sequenceClone.shift();
              return sequenceClone;
            });
          },
          (index + 1) * 300,
        );
      });
      setReversing(true);
    }
    if (sequence.length === 0) {
      setReversing(false);
    }
  }, [sequence]);

  return (
    <div className="container">
      {tiles?.map((row, rowIndex) => (
        <div className="row">
          {row?.map((val, colIndex) => (
            <div
              className={`tile ${val ? "active" : "inactive"} ${val === null && "disabled"}`}
              onClick={() =>
                !val && !reversingFlag && handleTileClick(rowIndex, colIndex)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
