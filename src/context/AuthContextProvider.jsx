import React, { useEffect } from 'react';
import { useSetState } from 'react-use';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AuthContext from './AuthContext';


const initialState = {
  isLoggedIn: false,
  loginError: null,
  token: null,
  userType: null,
  email: null
}

const AuthContextProvider = props => {
  const [state, setState] = useSetState(initialState);
  const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
  const setLoginError = (loginError) => setState({loginError});
  const setToken = (token) => setState({token});
  const setUserType = (userType) => setState({userType});
  const setName = (name) => setState({name});
  const navigate = useNavigate();


  useEffect(()=>{
    const storeIsLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (storeIsLoggedIn === "1"){
      let storeUserInfo = sessionStorage.getItem('userInfo');

      if (storeUserInfo){
        storeUserInfo = JSON.parse(storeUserInfo);

        setLoginSuccess(true);
        setToken(storeUserInfo['token']);
        setUserType(storeUserInfo['userType']);  
      }
    }
  },[]);


  const login = (email, password) => {
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
              userType: res.data.userType
            }));


            navigate("/home");
        })
        .catch(err=>{
            console.log(err);
            setLoginError('Invalid email and password');
        })
  };

  const logout = () => {
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
    setUserType(null);
    setName(null);

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userInfo')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        logingError: state.loginError,
        token: state.token,
        userType: state.userType,
        email: null,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider