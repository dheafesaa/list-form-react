import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./views/containers/Home/Home";
import Calculator from "./views/containers/Kalkulator/Calculator";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
