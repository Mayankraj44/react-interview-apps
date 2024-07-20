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
}, {
    title: "Accordion 4",
    content: "Lorem ipSum"
}, {
    title: "Accordion 5",
    content: "Lorem ipSum"
}]
//Addig functionality to open at max x accordion at same time
const expandedAccordionNum=3
export default function Accordion() {
    const [openIndex, setOpenIndex] = useState([0,1])
    const handleAccordionClick = (ind) => {
        const elementInd=openIndex.findIndex(ele=>ele===ind)
        const newOpenIndex=[...openIndex]
        if (elementInd!==-1) {
            newOpenIndex.splice(elementInd,1)
            console.log({newOpenIndex})
            setOpenIndex(newOpenIndex)
            return
        }
       if(openIndex.length==expandedAccordionNum){
        newOpenIndex.splice(0,1)
       }
       newOpenIndex.push(ind)
       setOpenIndex(newOpenIndex)
    }
    console.log(openIndex)
    return <div className="w-screen px-24">
        {data.map((accord, ind) => <AccordionBox key={ind} data={accord} isOpen={openIndex.find(ele=>ele===ind)} clickHandler={() => handleAccordionClick(ind)} />)}
    </div>
}