import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import AuthContextProvider from './context/AuthContextProvider.jsx';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>
);