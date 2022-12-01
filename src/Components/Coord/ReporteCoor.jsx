import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenavCoor.jsx';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import { columnReporte } from "/src/Components/Components/columnReporte.jsx";
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Reporte() {
    const authCTX = useContext(AuthContext);
    const [isRows, setRows] = React.useState([]);
    const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/reporte/';  
    const [id, setID] = useState([]);

    useEffect(() => {
      var cont = 1;
      const cant = [];
      axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
        .then((response) => {
          console.log(response.data)
          setRows(response.data);
          response.data.map(item => {
            cant.push(item.cont);
            cont = cont + 1;
        })
        setID(cant);
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
    <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Lista de Reporte </Typography> 
          </Box>
          <div className="tableSettReporte">
            <Box display="flex"justifyContent="center"alignItems="center"minHeight="100%"sx={{pl: "5%",height: '95%', width: '95%'}}>
              <DataGrid rows={isRows} columns={columnReporte} getRowId={(row) => `${row.matricula}-${row.taller}`} pageSize={15} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
            </Box>
            </div>
        </div>
      </Stack>
    </div>
    );
};