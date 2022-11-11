import React from 'react';
import Home from "/src/Components/estudiante.jsx";
import Inscripcion from "/src/Components/inscripcion.jsx";
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
                  <Route path="/inscripciones" element={<Inscripcion />} />
                  <Route path="/login" element={<Login/>} />
                </Routes>
              </main>
            </div>
    );
}

export default App