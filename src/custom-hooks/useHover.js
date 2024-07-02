import { useState, useRef, useEffect } from "react";
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const setHoverOn = () => {
      setIsHovered(true);
    };
    const setHoverOff = () => {
      setIsHovered(false);
    };
    if (elementRef.current) {
      elementRef.current.addEventListener("mouseenter", setHoverOn);
      elementRef.current.addEventListener("mouseleave", setHoverOff);
    }

    return () => {
      elementRef.current.removeEventListener("mouseenter", setHoverOn);
      elementRef.current.removeEventListener("mouseleave", setHoverOff);
    };
  }, [elementRef.current]);

  return [elementRef, isHovered];
};
