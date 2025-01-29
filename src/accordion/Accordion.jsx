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
const maxOpen=3
const defaultOpenIndex=0
export default function Accordion() {
    const [openIndex, setOpenIndex] = useState([defaultOpenIndex])
    const handleAccordionClick = (index) => {
        if (openIndex.includes(index)) {
            const newOpenState = openIndex.filter((ind) => ind !== index);
            return setIsOpen(newOpenState);
          }
          const newOpenState = [...openIndex];
          newOpenState.push(index);
          setOpenIndex(newOpenState.slice(-maxOpen));
    }
    return <div className="w-screen px-24">
        {data.map((accord, ind) => <AccordionBox key={ind} data={accord} isOpen={!!openIndex.some(ele=>ele===ind)} clickHandler={() => handleAccordionClick(ind)} />)}
    </div>
}