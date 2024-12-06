import { useState } from "react";
import { useCopy } from "../useCopy";

export function UseCopy() {
    const [text, setText] = useState('')
    const [buttonValue, copyFunc] = useCopy()

    return <>
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={() => copyFunc(text)}>{buttonValue}</button>
    </>
}