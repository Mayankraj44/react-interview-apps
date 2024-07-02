import { useState } from "react";

export default function useToggle(on = false) {
  const [isOn, setIsOn] = useState(on);
  function toggle() {
    setIsOn((p) => !p);
  }
  return [isOn, toggle];
}
