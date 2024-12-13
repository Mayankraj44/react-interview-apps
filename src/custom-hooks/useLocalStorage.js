import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
    //1 Way to get inital data with useState setter function
    const [value, setValue] = useState(() => {
        try {
            let data = localStorage.getItem(key)
            if (data !== null) {
                let parsedData = JSON.parse(data)
                return parsedData
            }
            else {
                localStorage.setItem(key, defaultValue)
                return defaultValue
            }
        }
        catch (err) {
            localStorage.setItem(key, defaultValue)
            return defaultValue
        }
    });


    //2 way with useEffect
    // const [value, setValue] = useState(null);

    useEffect(() => {
        try {
            let data = localStorage.getItem(key)
            if (data !== null) {
                let parsedData = JSON.parse(data)
                setValue(parsedData)
            }
            else {
                setData(defaultValue)
            }
        }
        catch (err) {
            setData(defaultValue)
        }
    }, [])


    const setData = useCallback((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setData(newValue)
    }, [])
    return [value, setData]
}