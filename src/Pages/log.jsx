
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "/src/public/prepanet.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "/src/styles/App.css"
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function SignInSide() {
  const [isRows, setIsRows] = useState([]);
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [username, setUsername] = useState('');
  
const errors = {
  uname: "Invalid username",
  pass: "Invalid password"
};

useEffect(() => {
  axios.get("https://prepanet-366500.wl.r.appspot.com/api/alumnos/")
    .then(res => {
      console.log(res)
      setIsRows(res.data)
    })
    .catch(err => {
      console.log(err)
    })
})


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = isRows.find((user) => user.matricula === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.firstName !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setUsername(userData.firstName);
        setIsSubmitted(true);
        navigate('/')
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

const renderErrorMessage = (name) =>
name === errorMessages.name && (
  <div className="error">
    <Alert severity="error">{errorMessages.message}</Alert>
  </div>
);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundPosition: ' left center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
        sx={{
          background: 'linear-gradient(to right bottom, #009FFD,#2A2A72)'
          }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="login-form">
              <form onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <div className="input-container">
                  <input type="text" name="uname" placeholder="Username" required />
                  {renderErrorMessage("uname")}
                </div>
                <div className="input-container">

                  <input type="password" name="pass" placeholder="Password" required />
                  {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                  <input type="submit" value="Entrar"/>
                </div>
                </Stack>
              </form>
        </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
