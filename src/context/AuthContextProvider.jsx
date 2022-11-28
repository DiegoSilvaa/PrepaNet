import React, { useEffect } from 'react';
import { useSetState } from 'react-use';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AuthContext from './AuthContext';


const initialState = {
  isLoginPending: false,
  isLoggedIn: false,
  loginError: null,
  token: null,
  userType: null,
  user: null
}

const AuthContextProvider = props => {
  const [state, setState] = useSetState(initialState);
  const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
  const setLoginPending = (isLoginPending) => setState({isLoginPending});
  const setLoginError = (loginError) => setState({loginError});
  const setToken = (token) => setState({token});
  const setUserType = (userType) => setState({userType});
  const setName = (name) => setState({name});
  const navigate = useNavigate();


  useEffect(()=>{
    const storeIsLoggedIn = sessionStorage.getItem('isLoggedIn');
    const storeIsError = sessionStorage.getItem('loginError');

    if (storeIsError === "1") {
      setLoginError('Invalid email and password');
    }

    if (storeIsLoggedIn === "1"){
      let storeUserInfo = sessionStorage.getItem('userInfo');

      if (storeUserInfo){
        storeUserInfo = JSON.parse(storeUserInfo);

        setLoginSuccess(true);
        setToken(storeUserInfo['token']);
        setUserType(storeUserInfo['userType']);  
        setName(storeUserInfo['user']);
      }
    }
  },[]);


  const login = (email, password) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
    setUserType(null);
    setName(null);

    axios.post('https://prepnet.uc.r.appspot.com//api/auth/generate-token/', {email, password},
    { headers: {"Content-Type" : 'application/json'}})
        .then(res=>{
            console.log(res.data);
            setLoginSuccess(true);
            setToken(res.data.token);
            setUserType(res.data.userType);
            setName(email);

            sessionStorage.setItem('isLoggedIn', '1');
            sessionStorage.setItem('userInfo', JSON.stringify({
              token: res.data.token,
              userType: res.data.userType,
              user: email
            }));
            setLoginPending(false);

            navigate("/home");
        })
        .catch(err=>{
            console.log(err);
            setLoginError('Invalid email and password');
            sessionStorage.setItem('loginError', '1');
            setLoginPending(false);
        })
  };

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
    setUserType(null);
    setName(null);

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('loginError');
  }

  return (
    <AuthContext.Provider
      value={{
        isLoginPending: state.isLoginPending,
        isLoggedIn: state.isLoggedIn,
        loginError: state.loginError,
        token: state.token,
        userType: state.userType,
        user: state.name,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider