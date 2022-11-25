import * as React from 'react';
import '/src/styles/Alumnos.css'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import {
  DataGrid,
  GridFooter,
  useGridApiEventHandler,
  useGridApiContext,
  GridToolbar,
} from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios'
import Sidenav from '/src/Components/Sidenav.jsx';
import Stack from '@mui/material/Stack';
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';

const columnAlumno = 
[
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    width: 150,
  },
  {
    field: 'duracion',
    headerName: 'Duracion',
    width: 150,
  }
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100, type: 'number', },
  { field: 'matricula', headerName: 'Matricula', width: 100, type: 'string',},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type: 'string'
  },
  {
    field: 'lastName',
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
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 110,
  },
  {
    field: 'edad',
    type: 'number',
    headerName: 'Edad',
    width: 110,
  },
  {
    field: 'campus',
    type: 'string',
    filterable: false,
    headerName: 'Campus',
    width: 170,
    valueFormatter: ({ value }) => value.name
  },
  {
    field: 'taller',
    headerName: 'Taller',
    filterable: false,
    width: 150,
    type: 'string',
    valueFormatter: ({ value }) => value.nombre
  },
];

export default function Alumnos() {
const authCTX = useContext(AuthContext);
const [isRows, setIsRows] = useState([]);
const [message, setMessage] = React.useState('');
const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/alumnos/';
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
  setMessage(`${params.row.firstName || ''} ${params.row.lastName || ''} clicked`); 
  axios.post('https://prepnet.uc.r.appspot.com/api/auth/generate-token/', {email: "Jackson_Stiedemann53@tec.mx", password: '1234'},
  { headers: {"Content-Type" : 'application/json'}})
    .then(res=>{
      console.log(res.data);
      axios.get(`${baseUrl}`, { headers: {"x-auth-token": res.data.token}})
        .then((response) => {
          console.log(response.data)
          setIsRowsAlumno(response.data);
        });
    })
};

const renderTable = (
  <div className="contenidoTabla">
  <div>
    {message}
  </div>
  <Box sx={{ pt: 4, pl: 2, height: '100%', width: '95%' }}>
    <DataGrid
      columns={columnAlumno}
      rows={rowsAlumno}
      pageSize={5}
      rowsPerPageOptions={[15]}
      components={{
        Toolbar: GridToolbar
      }}
      autoHeight
      sx={{ pb: 5 }}
    />
  </Box>
  </div>
);

  return (
    <div className="Back">
        <div className="TopBar">
        </div>
        <Stack direction="row" spacing={32}>
    <Sidenav/>
        <div className="allCharts">
          <Stack direction="row" spacing={5} mt={2}>
          <div className="tableSett">
            <Box sx={{ pt: 4, pl: 2, height: '90%', width: '95%' }}>
              <DataGrid
                rows={isRows}
                columns={columns}
                pageSize={15}
                onRowClick={handleRowClick}
                rowsPerPageOptions={[15]}
                components={{
                  Toolbar: GridToolbar
                }}
              />
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
