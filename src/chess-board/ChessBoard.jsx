import { useState } from "react";
import { CHESS_BOARD_LAYOUT, KNIGHT_POSSIBLE_MOVES } from "../utils/const";
import Cell from "./components/Cell";
import "./index.css"

export default function ChessBoard() {
    const [currentPosition,setCurrentPosition]=useState(null)
    const [possibleMoves,setPossibleMoves]=useState(null)
    const handleHover = (row, col) => {
        setCurrentPosition([row,col])
        calculatePossibleMoves(row,col)
    }
    const handleLeave=()=>{
        setCurrentPosition(null)
        setPossibleMoves(null)
    }
    const calculatePossibleMoves=(row, col)=>{
        let result=[]
        for(let moveArr of KNIGHT_POSSIBLE_MOVES){
            let newRowInd=row+moveArr[0];
            let newColInd=col+moveArr[1];
            if(newRowInd>-1 && newRowInd <CHESS_BOARD_LAYOUT.length && newColInd>-1 && newColInd <CHESS_BOARD_LAYOUT.length){
                result.push(newRowInd+""+newColInd)
            }
        }
        setPossibleMoves(result)
    }
    return <div className="board" onMouseLeave={handleLeave}>
        {CHESS_BOARD_LAYOUT?.map((_, rowInd) => (
            <div key={rowInd} className="row">{CHESS_BOARD_LAYOUT[rowInd]?.map((_, colInd) => 
                <div className={`${(rowInd + colInd) % 2 === 0 ? 'even' : 'odd'}`} key={rowInd+""+colInd} onMouseEnter={() => handleHover(rowInd, colInd)}>
                    <Cell
                     active={rowInd === currentPosition?.[0] && colInd === currentPosition?.[1]}
                     canMoveTo={possibleMoves?.includes(rowInd+""+colInd)}
                    />
                </div>
            )}</div>
        ))}
    </div>
}