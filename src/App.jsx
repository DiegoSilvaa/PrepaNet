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


function App(){
  const authCTX = useContext(AuthContext);


  let routes;
  // console.log(authCTX.isLoggedIn);

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
  }else{
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


  return (
    <div className="App">
      <main>
       {routes}
      </main>
    </div>
  );
}
export default App