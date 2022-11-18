import React from 'react';
import Alumnos from "/src/Components/Alumnos.jsx";
import Home from "/src/Components/Home.jsx";
import Periodos from "/src/Components/Periodos.jsx";
import Coordinadores from "/src/Components/Coordinadores.jsx"
import {useContext} from "react";
import { Navigate } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Pages/log';
import { AuthContext } from './context/Auth.context.jsx';


function App(){
  const { state } = useContext(AuthContext);
  const render = (
    <div className="App">
      <main>
        <Routes>
          {true && <Route path="/" element={<Navigate replace to="/login"/>} />}
          {false && <Route path="/" element={<Navigate replace to="/home"/>} />}
          <Route path="/home" element={<Home/>} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/coordinadores" element={<Coordinadores />} />
          <Route path="/periodos" element={<Periodos />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </div>
  );

  return (
    <div className="App">
      <main>
        <Routes>
          {true && <Route path="/" element={<Navigate replace to="/login"/>} />}
          {false && <Route path="/" element={<Navigate replace to="/home"/>} />}
          <Route path="/home" element={<Home/>} />
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