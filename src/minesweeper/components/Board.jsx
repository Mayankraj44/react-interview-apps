import React, { useEffect, useState } from "react";
import { Cell } from "./Cell";
import { MINESWEEPER_GAME_STATE } from "../../utils/const";

function generateBoard(size) {
    const board = [];
    let index = 0
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            //   isMine: true/false,       The hidden identity
            //   isOpened: true/false,     Has the player clicked it?
            //   isFlagged: true/false,    Has the player right-clicked it?
            //   neighborMines: 0 to 8     The calculated count

            row.push({ key: index++, xCordinate: i, yCordinate: j, isMine: false, isOpened: false, neighborMines: 0, isFlagged: false });

        }
        board.push(row);


    }
    return board;
}

const Board = ({ size, minesCount = 10 }) => {
    const [board, setBoard] = useState(generateBoard(size));
    const [openCellCount, setOpenCellCount] = useState(0);
    const [minesLocation, setMinesLocation] = useState([]);
    const [gameStatus, setGameStatus] = useState(MINESWEEPER_GAME_STATE.NOT_STARTED)
    const [flagCount, setFlagCount] = useState(0)


    useEffect(() => {
        if (openCellCount + flagCount === size * size) {
            setGameStatus(MINESWEEPER_GAME_STATE.WON)
            revealMines()
        }
    }, [openCellCount, flagCount])

    const handleCellClick = (e, cell) => {
        e.preventDefault();
        // E.type === "click" or "contextmenu"
        if (gameStatus == MINESWEEPER_GAME_STATE.OVER) return
        if (e.type === "click") {
            handleLeftClick(cell);
        } else if (e.type === "contextmenu") {
            handleRightClick(cell)
        }

    }

    const handleLeftClick = (cell) => {
        if (isFirstClick()) {
            //Initialize the board with random mines and neighbour mines count
            initializeBoard(cell)
            return
        }
        if (cell?.isFlagged || cell?.isOpened) {
            return
        }
        if (cell?.isMine) {
            setGameStatus(MINESWEEPER_GAME_STATE.OVER)
            revealMines()
            return
        }
        const newBoard = structuredClone(board)
        newBoard[cell.xCordinate][cell.yCordinate].isOpened = true
        incrementCount()
        setBoard(newBoard)




    }

    const initializeBoard = (cell) => {
        // Initialize the board with random mines and neighbour mines count
        // Return the board
        const newBoard = addMines(cell);
        addNeighbouringCells(newBoard)
        floodFill(newBoard, cell)
        setBoard(newBoard)
        // incrementCount()
        setGameStatus(MINESWEEPER_GAME_STATE.IN_PROGRESS)

    }
    const incrementCount = () => setOpenCellCount(prev => prev + 1)

    const addNeighbouringCells = (newBoard) => {
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                if (newBoard[x][y].isMine) continue;
                let mineCount = 0
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const neighbourX = x + i;
                        const neighbourY = y + j;
                        if (neighbourX >= 0 && neighbourX < size && neighbourY >= 0 && neighbourY < size && newBoard[neighbourX][neighbourY].isMine) {
                            mineCount++
                        }
                    }
                }
                newBoard[x][y].neighborMines = mineCount

            }
        }

    }

    const revealMines = () => {
        const newBoard = structuredClone(board)
        minesLocation.forEach((location) => {
            const x = Math.floor(location / size)
            const y = location % size
            newBoard[x][y].isOpened = true
        })
        setBoard(newBoard)
    }

    const addMines = (cell) => {
        const newBoard = structuredClone(board);
        let exceptionCellsIndex = getNeighbourCells(cell.xCordinate, cell.yCordinate);
        let minesIndex = []
        let mineCount = 0;
        while (mineCount < minesCount) {
            let randomX = Math.floor(Math.random() * size);
            let randomY = Math.floor(Math.random() * size);
            const index = randomX * size + randomY;
            if (!exceptionCellsIndex.includes(index) && !minesIndex.includes(index)) {
                newBoard[randomX][randomY].isMine = true;
                minesIndex.push(index)
                mineCount++;
            }
        }
        setMinesLocation(minesIndex)
        return newBoard;
    }
    const getNeighbourCells = (x, y) => {
        const neighbourCells = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const neighbourX = x + i;
                const neighbourY = y + j;
                if (neighbourX >= 0 && neighbourX < size && neighbourY >= 0 && neighbourY < size) {
                    neighbourCells.push(board[neighbourX][neighbourY].key);
                }
            }
        }
        return neighbourCells;
    }
    const isFirstClick = (cell) => {
        return openCellCount === 0;
    }
    const handleRightClick = (cell) => {
        if (cell.isOpened || openCellCount == 0) {
            return;
        }

        const newBoard = structuredClone(board)
        const { xCordinate, yCordinate } = cell
        newBoard[xCordinate][yCordinate].isFlagged = !cell.isFlagged
        if (cell.isFlagged) {
            setFlagCount(prev => prev - 1)
        } else {
            setFlagCount(prev => prev + 1)
        }

        setBoard(newBoard);
    }

    const floodFill = (newBoard, cell) => {
        const { xCordinate, yCordinate } = cell;
        if (newBoard[xCordinate][yCordinate].isOpened || newBoard[xCordinate][yCordinate].isMine) {
            return;
        }
        newBoard[xCordinate][yCordinate].isOpened = true;
        incrementCount()
        if (newBoard[xCordinate][yCordinate].neighborMines > 0) {
            return;
        }
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const neighbourX = xCordinate + i;
                const neighbourY = yCordinate + j;
                if (neighbourX >= 0 && neighbourX < size && neighbourY >= 0 && neighbourY < size) {
                    floodFill(newBoard, newBoard[neighbourX][neighbourY]);
                }
            }
        }
    }
    return <div>
        <div>
            <div>Flag Placed - {flagCount}</div>
        </div>
        {board.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((cell, colIndex) => (
                    <Cell key={colIndex} cell={cell} clickHandler={(e) => handleCellClick(e, cell)} showMines={gameStatus === MINESWEEPER_GAME_STATE.OVER || gameStatus === MINESWEEPER_GAME_STATE.WON} />
                ))}
            </div>
        ))}
        {gameStatus}
    </div>

};

export default Board;
