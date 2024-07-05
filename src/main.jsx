import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./routerConfig.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>,
);
