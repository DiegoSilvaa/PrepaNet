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

const columnAlumno = 
[
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 320,
  },
  {
    field: 'orden',
    headerName: 'Orden',
    width: 100,
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    width: 120,
  },
  {
    field: 'duracion',
    headerName: 'Duracion',
    width: 80,
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100, type: 'number', },
  { field: 'matricula', headerName: 'Matricula', width: 100, type: 'string',},
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    type: 'string'
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    type: 'string'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    type: 'string',
    width: 200,
    valueGetter: (params) =>
      `${params.row.first_name || ''} ${params.row.last_name || ''}`,
  },
  {
    field: 'campus',
    type: 'string',
    filterable: false,
    headerName: 'Campus',
    width: 170,
    valueFormatter: ({ value }) => value.nombre
  }
];

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
        <Stack direction="row" spacing={"16%"}>
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
