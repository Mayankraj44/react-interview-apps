import Progress from "./components/Progress"
import "./index.css"
export default function ProgressBar(){
    return (
        <div style={{width:"500px"}}>
        <Progress value={50} />
        <Progress value={30} />
        <Progress value={98} />
        </div>
    )
}