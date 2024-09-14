/*
    Create a div of 100 x 100 px then movie it along the boundary of the Viewport
    the speed of the box should be linear.
    Bonus handle edge case when we resize the window
*/

// get the top left from ref
// based on condition update the top and left
// change the top left styles of ref
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./solider.module.css";

function Solider() {
  const ref = useRef(null);
  const phaseRef = useRef(1);
  const updatePosition = useCallback(() => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    let { top, left } = ref.current.getBoundingClientRect();
    if (top === 0 && left < windowWidth - 100) {
      left += 1;
      phaseRef.current = 1;
    } else if (top < windowHeight - 100 && left === windowWidth - 100) {
      top += 1;
      phaseRef.current = 2;
    } else if (top === windowHeight - 100 && left > 0) {
      left -= 1;
      phaseRef.current = 3;
    } else if (top > 0 && left === 0) {
      top -= 1;
      phaseRef.current = 4;
    }
    ref.current.style.top = `${top}px`;
    ref.current.style.left = `${left}px`;
  }, []);

  const handleResize = () => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    if (phaseRef.current === 2) {
      ref.current.style.left = `${windowWidth - 100}px`;
    }
    if (phaseRef.current === 3) {
      ref.current.style.top = `${windowHeight - 100}px`;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updatePosition();
    }, 1);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={ref} className={styles.solider}></div>;
}

export default Solider;
