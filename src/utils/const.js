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
  {
    url: "/use-copy",
    name: "UseCopy",
  },
  {
    url: "/nested-comments",
    name: "Nested Comments",
  },
  {
    url: "/revolving-word",
    name: "Revolving Word",
  },
  {
    url: "/pagination-fe",
    name: "Pagination Frontend",
  },
  {
    url: "/pagination-be",
    name: "Pagination Backend",
  },
  {
    url: "/progress-bar",
    name: "Progress bar",
  },
  {
    url: "/slider",
    name: "Slider",
  },
  {
    url: "/tic-tac-toe",
    name: "Tic Tac Toe",
  },
];

export const MEME_API_URL = "https://meme-api.com/gimme/20";

export const CHESS_BOARD_LAYOUT = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const KNIGHT_POSSIBLE_MOVES = [
  [-1, -2],
  [1, -2],
  [-2, -1],
  [2, -1],
  [-1, 2],
  [1, 2],
  [-2, 1],
  [2, 1],
];

export const PAGINTION_API_BASE_URL = "https://dummyjson.com/products";
export const PAGINATION_FE_BASE_URL=PAGINTION_API_BASE_URL + "?limit=2000&select=id,title,description,price,thumbnail";
//Limit 2000 to mimic that all product data is get in 1 singel api call
export const PAGE_LIMIT_OPTIONS=[5,10,15,20]