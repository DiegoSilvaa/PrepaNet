import React from 'react';
import Sidenav from '/src/Components/Sidenav.jsx';
import Alumnos from "/src/Components/Alumnos.jsx";
import Home from "/src/Components/Home.jsx";
import Periodos from "/src/Components/Periodos.jsx";
import Coordinadores from "/src/Components/Coordinadores.jsx"
import { useEffect, useState } from "react";
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
                  <Route path="/" element={<Home />} />
                  <Route path="/alumnos" element={<Alumnos />} />
                  <Route path="/coordinadores" element={<Coordinadores />} />
                  <Route path="/periodos" element={<Periodos />} />
                  <Route path="/login" element={<Login/>} />
                
                </Routes>
              </main>
            </div>
    );
}

export default App