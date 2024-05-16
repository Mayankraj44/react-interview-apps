import { useEffect, useState } from "react";

const useTimer = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return date;
};

export default useTimer;
