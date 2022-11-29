import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenav.jsx';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import { columnReporte } from "/src/Components/Components/columnReporte.jsx";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';

export default function Reporte() {
    const authCTX = useContext(AuthContext);
    const [isRows, setRows] = React.useState([]);
    const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/reporte/';  

    useEffect(() => {
      axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
        .then((response) => {
          console.log(response.data)
          setRows(response.data);
        })
        .catch(err =>{
          console.log(err);
        })
        ;
    }, []);

    return (
        <div className="Back">
        <Stack direction="row" spacing={30}>
    <Sidenav/>
        <Stack spacing={5}>
        <DataGrid rows={isRows} columns={columnReporte} pageSize={15} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
        </Stack>
    </Stack>
    </div>
    );
};