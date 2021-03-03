import React from "react";
import ReactDOM from "react-dom";

import HomeScreen from "./app/screens/Home";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
  document.getElementById("root"),
);
