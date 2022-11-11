import React from 'react';
import Alumnos from "/src/Components/AlumnosCoor.jsx";
import Home from "/src/Components/HomeCoor.jsx";
import Periodos from "/src/Components/PeriodosCoor.jsx";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Pages/log';


function App(){

    const [isLogin, setIsLogin] = useState(false);

    return (
            <div className="App">
              <main>
                <Routes>
                  {false && <Route path="/" element={<Navigate replace to="/login"/>} />}
                  {true && <Route path="/" element={<Navigate replace to="/home"/>} />}
                  <Route path="/home" element={<Home/>} />
                  <Route path="/alumnos" element={<Alumnos />} />
                  <Route path="/periodos" element={<Periodos />} />
                  <Route path="/login" element={<Login/>} />
                </Routes>
              </main>
            </div>
    );
}

export default App