import React, { useState } from "react";
import "./App.css";
import Papa from 'papaparse';
import Dash from '/src/mainDash.jsx';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function App() {

  // Leer csv de matriculas y contrasenas
  // En un futuro implementar un boton de drag para cargar el csv desde la vista de administrador
  var data;
  Papa.parse('Info/info.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log(results);
      data = results.data;
    }
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  let navigateTo = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = data.find(user => user.username === uname.value);

    if (userData) {
      if (userData.password != pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else { // Username y Password validos
        setIsSubmitted(true);
        navigateTo({Dash})
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Alert variant="filled" severity="error">
  {errorMessages.message}!
</Alert>
    );

  // Para Insertar logos
  /*
    <div className="logo">
              <img src="/public/logoprepanet.jpg" width="200" height="60" />
            </div>
            <div className="logoTec">
              <img src="/public/logotec.jpeg" width="100" height="100" /> 
    */

  return (
    <div className="back">
      <div className="app">
        <div className="login-form">
          <div className="form-settings">
            <div className="title">Para iniciar la sesión ingresa tu usuario y contraseña</div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;