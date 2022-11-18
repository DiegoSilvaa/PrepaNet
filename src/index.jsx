import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Est from './AppEst';
import Coor from './AppCoor';
import { ContextProvider } from './context/Auth.context.jsx';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <ContextProvider value={500}>
        <App />
        </ContextProvider>
      </BrowserRouter>
    </React.StrictMode>
);