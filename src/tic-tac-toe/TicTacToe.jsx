import { useState } from "react"
import "./index.css"

const SIZE=3
export default function TicTacToe(){
    const [board,setBoard]=useState(Array.from({length:SIZE},()=>Array(SIZE).fill(0)))
    const [data,setData]=useState({
        ROW:Array(SIZE).fill(0),
        COL:Array(SIZE).fill(0),
        DIAG:0,
        ANTI_DIAG:0
    })
    const [player,setPlayer]=useState(1)
    const [success,setSuccess]=useState(false)
    const handleClick=(row,col,player)=>{
        if(row<0 || col<0 || row>SIZE || col>SIZE || board[row][col]!==0 || (player!==1 && player!==-1)){
            return 
        }
        const newBoard=structuredClone(board)
        newBoard[row][col]=player;
        setBoard(newBoard)
        const newData=structuredClone(data)
        newData.ROW[row]+=player
        newData.COL[col]+=player
        if(row==col){
           newData.DIAG+=player
        }
        if(row== SIZE-1-col){
            newData.ANTI_DIAG+=player
        }
        setData(newData)
        if(newData.ROW[row]== Math.abs(SIZE) || newData.COL[col]== Math.abs(SIZE)|| newData.DIAG== Math.abs(SIZE)|| newData.ANTI_DIAG== Math.abs(SIZE)){
           return setSuccess(true)
        }
        togglePlayer()
    }
    const togglePlayer=()=>{
        if(player==1){
            setPlayer(-1)
        }
        else{
            setPlayer(1)
        }
    }
    return <div className="board" style={{gridTemplateColumns: `repeat(${board.length},auto`}}>
        {board?.map((row,rowInd)=>
               row?.map((val,colInd)=><div onClick={()=> !success && handleClick(rowInd,colInd,player)} key={rowInd+" "+colInd} className="board-cell">{val==1 ? "A" : val==-1?  "B" : ""}</div>)
        )}
        {success && <p>{player === 1 ? "A" :"B" } Wins </p>}

    </div>
}