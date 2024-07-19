import { useState } from "react"
import AccordionBox from "./components/AccordionBox"

const data = [{
    title: "Accordion 1",
    content: "Lorem ipSum"
},
{
    title: "Accordion 2",
    content: "Lorem ipSum"
}, {
    title: "Accordion 3",
    content: "Lorem ipSum"
}]
export default function Accordion() {
    const [openIndex,setOpenIndex]=useState(0)
    const handleAccordionClick=(ind)=>{
        if(ind === openIndex){
            setOpenIndex(null)
        }
        else{
            setOpenIndex(ind)
        }
    }
    return <div className="w-screen px-24">
        {data.map((accord, ind) => <AccordionBox key={ind} data={accord} isOpen={ind=== openIndex} clickHandler={()=>handleAccordionClick(ind)} />)}
    </div>
}