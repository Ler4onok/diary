import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
