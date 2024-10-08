import DigitalClock from "../digital-clock/DigitalClock";
import GridSequence from "../grid-sequence/GridSequence";
import StartRating from "../star-rating/StartRating";
import TrafficLights from "../traffic-lights/TrafficLights";

export const APP_NAMES = [
  {
    url: "/digital-clock",
    name: "DigitalClock ",
  },
  {
    url: "/grid-sequence",
    name: "GridSequence ",
  },
  {
    url: "/star-rating",
    name: "StartRating ",
  },
  {
    url: "/traffic-lights",
    name: "TrafficLights",
  },
  {
    url: "/debounce",
    name: "Debounce",
  },
  {
    url: "/infinite-scroll",
    name: "Infinite Scroll",
  },
  {
    url: "/accordion",
    name: "Accordion",
  },
  {
    url: "/solider",
    name: "Solider",
  },
  {
    url: "/chess-board",
    name: "ChessBoard",
  },
];

export const MEME_API_URL = "https://meme-api.com/gimme/20";


export const CHESS_BOARD_LAYOUT = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

export const KNIGHT_POSSIBLE_MOVES=[[-1,-2],[1,-2],[-2,-1],[2,-1],[-1,2],[1,2],[-2,1],[2,1]]
