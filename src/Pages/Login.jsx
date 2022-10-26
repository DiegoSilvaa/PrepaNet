
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "/public/prepanet.jpg";
import { useState } from "react";
import Papa from 'papaparse';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';



const theme = createTheme();
export default function SignInSide() {

  var data;
  Papa.parse('/Info/info.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log(results);
      data = results.data;
    }
  });

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const infoInputs = new FormData(event.currentTarget);
    console.log({
      username: infoInputs.get('username'),
      password: infoInputs.get('password'),
    });
    const userData = data.find((user) => user.username === infoInputs.get('username'));
    if (userData) {
      if (userData.password !== infoInputs.get('password')) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        console.log("Valid Username")
        setIsSubmitted(true);
        navigate("/dashboard");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Alert severity="error" sx={{ px: 14 }}>This is an error alert — {errorMessages.message}!</Alert>
    );




  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              /> {renderErrorMessage("uname")}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />{renderErrorMessage("pass")}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              > Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}