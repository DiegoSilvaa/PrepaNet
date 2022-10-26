import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '/src/styles/Dash.css';
import Sidenav from '/src/Components/Sidenav.jsx';
import Alumnos from "/src/Components/Alumnos.jsx";
import Home from "/src/Components/Home.jsx";
import Periodos from "/src/Components/Periodos.jsx";
import Coordinadores from "/src/Components/Coordinadores.jsx"
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/coordinadores" element={<Coordinadores />} />
          <Route path="/periodos" element={<Periodos />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;