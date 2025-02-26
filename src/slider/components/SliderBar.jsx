import { useEffect, useRef, useState } from "react"

export default function SliderBar({defaulValue=34}){
    const [value,setValue]=useState(defaulValue)
    const dragRef=useRef()
    const containerRef=useRef()
    // console.log(value)
    

    const handleClick=(e)=>{
        
        if(dragRef.current){
            
            const {left,right}=containerRef.current?.getBoundingClientRect()
            const currentX=e?.clientX;
            let value= ((currentX-left)*100 )/(right-left)
            value= value<0 ? 0 : value>100 ? 100 : value
            setValue(value)
        }
    }
    return <>
    <div onMouseLeave={()=>dragRef.current=false} onMouseDown={()=>dragRef.current=true} onMouseUp={()=>dragRef.current=false}   onMouseMove={handleClick}>
        <div ref={containerRef}   className="slider-outer">
            <div  className="slider-inner" style={{width: `${value}%`}} />
        </div>
    </div>
        
    </>
}