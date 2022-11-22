import React from 'react';
import Alumnos from "/src/Components/Alumnos.jsx";
import Home from "/src/Components/Home.jsx";
import Periodos from "/src/Components/Periodos.jsx";
import Coordinadores from "/src/Components/Coordinadores.jsx"
import ErrorPage from './Pages/404';
import {useContext} from "react";
import { Navigate } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Pages/log';
import AuthContext from './context/AuthContext';
// Coordinador

import AlumnosCoor from "/src/Components/AlumnosCoor.jsx";
import HomeCoor from "/src/Components/HomeCoor.jsx";
import PeriodosCoor from "/src/Components/PeriodosCoor.jsx";

// Estudiante
import Perfil from "/src/Components/perfilAlumno.jsx";
import HomeEst from "/src/Components/estudiante.jsx";
import Inscripcion from "/src/Components/inscripcion.jsx";

function App(){
  const authCTX = useContext(AuthContext);


  let routes;
  //console.log(authCTX.userType);

  if (!authCTX.isLoggedIn){
    routes = <Routes>
        {<Route path="/" element={<Navigate replace to="/login"/>} />}
        {<Route path="/login" element={<Login/>} />}
        {<Route path="/home" element={<Login/>} />}
        {<Route path="/alumnos" element={<Login/>} />}
        {<Route path="/coordinadores" element={<Login/>} />}
        {<Route path="/periodos" element={<Login/>} />}
        <Route path='*' element={<ErrorPage/>} />
    </Routes>
  } else {
    if (authCTX.userType === "admin") {
    routes = <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/alumnos" element={<Alumnos />} />
      <Route path="/coordinadores" element={<Coordinadores />} />
      <Route path="/periodos" element={<Periodos />} />
      <Route path='*' element={<ErrorPage/>} /> 
    </Routes>
    }
    else if (authCTX.userType === "coord"){
      routes = <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomeCoor/>} />
      <Route path="/alumnos" element={<AlumnosCoor />} />
      <Route path="/periodos" element={<PeriodosCoor />} />
      <Route path='*' element={<ErrorPage/>} /> 
    </Routes>
    }
    else if (authCTX.userType === "alumno") {
      routes = <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomeEst/>} />
      <Route path="/inscripciones" element={<Inscripcion />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path='*' element={<ErrorPage/>} /> 
    </Routes>
    } else {
      <Route path='*' element={<ErrorPage/>} /> 
    }
  }


  return (
    <div className="App">
      <main>
       {routes}
      </main>
    </div>
  );
}
export default App