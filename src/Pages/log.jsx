
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import background from "/src/public/prepanet.jpg";
import "/src/styles/App.css"
import Stack from '@mui/material/Stack';
import {useContext} from 'react';
import { useSetState } from 'react-use';
import AuthContext from '../context/AuthContext';


const initialState = {
  email: '',
  password: ''
}

export default function SignInSide() {


  const authCtx = useContext(AuthContext);
  const {
    isLoggedIn,
    loginError,
    isLoginPending 
  } = authCtx;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    authCtx.login(email, password);
    // login(email, password);
    setState({
      email: '',
      password: ''
    });
  }

const renderErrorMessage = () => (
  <div className="error">
    <Alert severity="error"> Password o Email incorrectos </Alert>
  </div>
);

  return (
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
              <form name="loginForm" onSubmit={onSubmit}>
              <Stack spacing={1}>
                <div className="input-container">
                  <input type="text" 
                  name="email" 
                  onChange={e => setState({email: e.target.value})} 
                  value={state.email} 
                  placeholder="Email"
                  required />
                </div>
                <div className="input-container">
                  <input type="password" 
                  name="password" 
                  onChange={e => setState({password: e.target.value})} 
                  value={state.password} 
                  placeholder="Password"
                  required  />
                { authCtx.isLoginPending && <div>Please wait...</div> }
                { authCtx.isLoggedIn && <div>Success.</div> }
                { authCtx.loginError && renderErrorMessage()}
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
  );
}