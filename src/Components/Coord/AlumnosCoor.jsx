import * as React from 'react';
import '/src/styles/Alumnos.css'
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
} from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios'
import Sidenav from '/src/Components/sidenavCoor.jsx';
import Stack from '@mui/material/Stack';
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import Typography from '@mui/material/Typography';
import { columnAlumno } from "/src/Components/Components/columnAlumno.jsx";
import { columns } from "/src/Components/Components/columns.jsx";

export default function Alumnos() {
const authCTX = useContext(AuthContext);
const [isRows, setIsRows] = useState([]);
const [message, setMessage] = React.useState('');
const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/alumnos/';
const baseUrl2 = 'https://prepnet.uc.r.appspot.com/api/coords/alumno/';
const [rowsAlumno, setIsRowsAlumno] = useState([]); 
const [isSubmitted, setIsSubmitted] = useState(false);

useEffect(() => {
  axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
    .then((response) => {
      console.log(response.data)
      setIsRows(response.data);
    })
    .catch(err =>{
      console.log(err);
    })
    ;
}, []);

const handleRowClick = (params) => {
  setIsSubmitted(true);
  setMessage(`${params.row.first_name || ''} ${params.row.last_name || ''} clicked`); 
  axios.get(`${baseUrl2}${params.row.id}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
    .then((response) => {
      console.log(response.data);
      setIsRowsAlumno(response.data.talleres);
    })
    .catch(err =>{
      console.log(err);
    })
};

const renderTable = (
  <div className="contenidoTabla">
  <div>
    {message}
  </div>
  <Box sx={{ pt: 4, pl: 2, height: '100%', width: '95%' }}>
    <DataGrid columns={columnAlumno} rows={rowsAlumno} pageSize={6} rowsPerPageOptions={[10]} components={{ Toolbar: GridToolbar }} autoHeight/>
  </Box>
  </div>
);

  return (
    <div className="Back">
        <Stack direction="row" spacing={"2%"}>
    <Sidenav/>
        <div className="allCharts">
          <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Lista de Alumnos </Typography> 
          </Box>
          <Stack direction="row" spacing={5} mt={2}>
          <div className="tableSett">
            <Box sx={{ pt: 4, pl: 2, height: '90%', width: '95%' }}>
              <DataGrid rows={isRows} columns={columns} pageSize={15} onRowClick={handleRowClick} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
            </Box>
            </div>
            <div className="tableStats">
            <Box sx={{ pt: 4, pl: 2, height: '90%', width: '95%' }}>
              {isSubmitted ? renderTable : <label> Selecciona una cuenta de Alumno </label>}
            </Box>
            </div>
            </Stack>
        </div>
        </Stack>
      </div>
  );
}
