import { useCallback, useEffect, useRef } from "react";
// This hooks is used call any callback after a certain duration
// This hooks accepts a callback and delay and return a clear and reset
// function to clear or reset the callback execution
// delay is changed then clear the previous timer is exist and start a new timer
// If callback is changed same existing timer should run only callback executed should
// be replace with new callback
export function useTimeout(callback, delay = 1000) {
  const timerRef = useRef(delay);
  const callBackRef = useRef(callback);
  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setTimer();
    return clear;
  }, [delay]);

  const setTimer = useCallback(() => {
    timerRef.current = setTimeout(() => {
      callBackRef.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timerRef.current && clearTimeout(timerRef.current);
  }, [callback]);

  const reset = useCallback(() => {
    clear();
    setTimer();
  }, [delay]);

  return { clear, reset };
}
