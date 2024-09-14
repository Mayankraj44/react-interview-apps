import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DigitalClock from "./digital-clock/DigitalClock";
import GridSequence from "./grid-sequence/GridSequence";
import StartRating from "./star-rating/StartRating";
import TrafficLights from "./traffic-lights/TrafficLights";
import Info from "./Info";
import { Debounce } from "./custom-hooks/debounce/Debounce";
import InfiniteScroll from "./infinite-scroll/InfiniteScroll";
import Accordion from "./accordion/Accordion";
import Solider from "./solider/Solider";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Info />,
      },
      {
        path: "/digital-clock",
        element: <DigitalClock />,
      },
      {
        path: "/grid-sequence",
        element: <GridSequence />,
      },
      {
        path: "/star-rating",
        element: <StartRating />,
      },
      {
        path: "/traffic-lights",
        element: <TrafficLights />,
      },
      {
        path: "/debounce",
        element: <Debounce />,
      },
      {
        path: "/infinite-scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/solider",
        element: <Solider />,
      },
    ],
  },
]);
