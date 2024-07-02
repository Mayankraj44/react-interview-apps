import { useCallback, useRef, useState } from "react";

export function useFocus() {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef(null);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  const refCallback = useCallback((node) => {
    if (ref.current) {
      ref.current.removeEventListener("focus", onFocus);
      ref.current.removeEventListener("blur", onBlur);
    }
    ref.current = node;
    if (ref.current) {
      ref.current.addEventListener("focus", onFocus);
      ref.current.addEventListener("blur", onBlur);
    }
  }, []);

  return [refCallback, isFocus];
}
