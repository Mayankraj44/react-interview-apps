import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timerID = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [value]);

  return debouncedValue;
}
