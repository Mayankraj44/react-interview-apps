import { useEffect, useState, useRef } from "react"

export function useCopy(initialValue = "Copy", nextValue = "Copied") {
    const [buttonValue, setButtonValue] = useState(initialValue)
    const timerRef = useRef(null)

    useEffect(() => {
        return () => {
            if (timerRef?.current) {
                clearTimeout(timerRef?.current)
            }
        }
    }, [])

    const success = () => {
        setButtonValue(nextValue)
        timerRef.current = setTimeout(() => {
            console.log("Hello")
            setButtonValue(initialValue)
        }, 4000)
    }
    async function copy(text) {
        setButtonValue(initialValue)
        if (!navigator?.clipboard) {
            console.log("Clipboard is not enabled")
            return
        }
        try {
            await navigator.clipboard.writeText(text)
            success()
        }
        catch (err) {
            console.log("Something went wrong")
        }
    }
    return [buttonValue, copy]
}