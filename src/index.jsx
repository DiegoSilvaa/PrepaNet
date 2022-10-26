import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "/src/Pages/Login (copy).jsx";
import App from "/src/Pages/Dash.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <html>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </html>
);