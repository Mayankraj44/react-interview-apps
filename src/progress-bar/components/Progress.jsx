import { useEffect } from "react"
import { useState } from "react"

export default function Progress({value}){
    const [progressValue,setProgressValue]=useState(0)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            const progressVal= value>100 ? 100  : value<0 ? 0 : value
            setProgressValue(progressVal)
        },0)
        return ()=>clearTimeout(timer)
    },[])
    return <>
    <div className="progress-container" role="progressbar" aria-valuenow={progressValue} aria-valuemax={100} aria-valuemin={0}>
    <div className="progress-inner" style={{width:`${progressValue}%`}}> </div>
    </div>
    </>
}