import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenav.jsx';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import { columnReporte } from "/src/Components/Components/columnReporte.jsx";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export default function Reporte() {
    const authCTX = useContext(AuthContext);
    const [isRows, setRows] = React.useState([]);
    const baseUrl = 'https://prepnet.uc.r.appspot.com/api/admin/reporte/';  

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
        <Stack direction="row" spacing={"2%"}>
    <Sidenav/>
    <div className="allCharts">
          <div className="tableSettReporte">
            <Box display="flex"justifyContent="center"alignItems="center"minHeight="100%"sx={{pl: "5%",height: '95%', width: '95%'}}>
              <DataGrid rows={isRows} columns={columnReporte} getRowId={(row) => row.matricula} pageSize={15} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
            </Box>
            </div>
        </div>
      </Stack>
    </div>
    );
};