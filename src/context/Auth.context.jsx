import React from 'react';
import { useSetState } from 'react-use';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export const AuthContext = React.createContext(null);

const initialState = {
  isLoggedIn: false,
  loginError: null,
  token: null,
  user: null,
  email: null
}

export const ContextProvider = props => {
  const [state, setState] = useSetState(initialState);
  const setLoginPending = (isLoginPending) => setState({isLoginPending});
  const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
  const setLoginError = (loginError) => setState({loginError});
  const setToken = (token) => setState({token});
  const setUserType = (user) => setState({user});
  const setName = (name) => setState({name});

  const navigate = useNavigate();
  const login = (email, password) => {
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
    setUserType(null);
    setName(null);
    setLoginPending(true);
    axios.post('https://prepnet.uc.r.appspot.com//api/auth/generate-token/', {email, password},
    { headers: {"Content-Type" : 'application/json'}})
        .then(res=>{
            setLoginPending(false);
            console.log(res.data);
            setLoginSuccess(true);
            setToken(res.data.token);
            setUserType(res.data.userType);
            setName(email);
            navigate("/home");
        })
        .catch(err=>{
            setLoginPending(false);
            console.log(err);
            setLoginError('Invalid email and password');
        })
  };

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
    setUserType(null);
    setName(null);
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
