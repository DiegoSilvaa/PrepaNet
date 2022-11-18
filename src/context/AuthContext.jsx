import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    logingError: null,
    token: null,
    userType: null,
    email: null,
    login: (email, password)=>{},
    logout: ()=>{}
  });

export default AuthContext