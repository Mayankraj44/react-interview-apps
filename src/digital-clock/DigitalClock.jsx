import Digit from "./components/Digit";
import Seperator from "./components/Seperator";
import useTimer from "./components/useTImer";
import "./index.css";

const DigitalClock = () => {
  const time = useTimer();
  const seconds = time?.getSeconds();
  const minute = time?.getMinutes();
  const hour = time?.getHours();
  console.log(`${hour} : ${minute}: ${seconds}`);

  return (
    <div className="clock-container">
      {/* {[...new Array(10).keys()]?.map((val) => (
        <Digit key={val} value={val} />
      ))} */}
      <Digit value={parseInt(hour / 10)} />
      <Digit value={parseInt(hour % 10)} />
      <Seperator />
      <Digit value={parseInt(minute / 10)} />
      <Digit value={parseInt(minute % 10)} />
      <Seperator />
      <Digit value={parseInt(seconds / 10)} />
      <Digit value={parseInt(seconds % 10)} />
    </div>
  );
};

export default DigitalClock;
