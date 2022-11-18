import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    loginError: null,
    isLoginPending: false,
    token: null,
    userType: null,
    user: null,
    login: (email, password)=>{},
    logout: ()=>{}
  });

export default AuthContext