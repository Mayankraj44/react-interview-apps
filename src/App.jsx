import "./App.css";
import GridSequence from "./grid-sequence/GridSequence";
import DigitalClock from "./digital-clock/DigitalClock";
import TrafficLights from "./traffic-lights/TrafficLights";
import StartRating from "./star-rating/StartRating";
import { useHover } from "./custom-hooks/useHover";

function App() {
  const [ref,state]=useHover()
  return (
    <>
    <div ref={ref}>{state? 'Hoverd' : ' Not Hovered' }</div>
      {/* <TrafficLights /> */}
      {/* <DigitalClock /> */}
    </>
  );
}

export default App;
