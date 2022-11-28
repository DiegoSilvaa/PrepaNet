import React, { useEffect } from 'react';
import {useContext} from "react";
import { Navigate } from 'react-router-dom';
import AuthContext from '/src/context/AuthContext';

export default function LogOut(props){
    const authCTX = useContext(AuthContext);
    useEffect(() => {
        authCTX.logout();
      }, []);
    
    return <h1>Cargando...</h1>
};