import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export function Debounce() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange =
    (setterFunc) =>
    ({ target }) => {
      setterFunc(target.value);
    };

  useEffect(() => {
    console.count("Debounced Data Fetching");
  }, [debouncedValue]);

  useEffect(() => {
    console.count("Data Fetching");
  }, [value2]);

  return (
    <>
      <div className="flex flex-col">
        <p>
          Open the console and type in both text box and see the difference in
          logs
        </p>
        <div className="flex flex-col my-4">
          <label htmlFor="simple-text">Simple</label>
          <input
            val={value2}
            id="simple-text"
            onChange={handleChange(setValue2)}
          />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="debounce-text">Debounce</label>
          <input
            val={value}
            id="debounce-text"
            onChange={handleChange(setValue)}
          />
        </div>
      </div>
    </>
  );
}
