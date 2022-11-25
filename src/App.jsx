import React from 'react';
import ErrorPage from './Pages/404';
import {useContext} from "react";
import { Navigate } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Pages/log';
import AuthContext from './context/AuthContext';
// Administrador 

import Alumnos from "/src/Components/Admin/Alumnos.jsx";
import Home from "/src/Components/Admin/Home.jsx";
import Periodos from "/src/Components/Admin/Periodos.jsx";
import Coordinadores from "/src/Components/Admin/Coordinadores.jsx"
import Reporte from "/src/Components/ADmin/ReporteAdmin.jsx";

// Coordinador

import AlumnosCoor from "/src/Components/Coord/AlumnosCoor.jsx";
import HomeCoor from "/src/Components/Coord/HomeCoor.jsx";
import PeriodosCoor from "/src/Components/Coord/PeriodosCoor.jsx";
import ReporteCoor from "/src/Components/Coord/ReporteCoor.jsx";

// Estudiante
import Perfil from "/src/Components/Alumno/perfilAlumno.jsx";
import HomeEst from "/src/Components/Alumno/estudiante.jsx";
import Inscripcion from "/src/Components/Alumno/inscripcion.jsx";

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
      <Route path="/reporte" element={<Reporte />} />
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
      <Route path="/reporte" element={<ReporteCoor />} />
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