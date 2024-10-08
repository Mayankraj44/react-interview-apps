import KNIGHT from "../../assets/chessboard/knight.svg"
export default function Cell({active,canMoveTo}){
    return <div className={`cell ${active && 'active-cell'} ${canMoveTo && 'can-active-cell'}`}>{active && <img src={KNIGHT} />}</div>
}