import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "/src/Pages/Login (copy).jsx";
// import App from "/src/Pages/Dash.jsx";


import App from './App';
import Est from './AppEst';
import Coor from './AppCoor';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Est />
      </BrowserRouter>
    </React.StrictMode>
);