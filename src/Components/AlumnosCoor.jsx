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
  }
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'matricula', headerName: 'Matricula', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
  },
  {
    field: 'edad',
    headerName: 'Edad',
    width: 110,
  },
  {
    field: 'campus',
    headerName: 'Campus',
    width: 170,
    valueFormatter: ({ value }) => value.name
  },
  {
    field: 'taller',
    headerName: 'Taller',
    width: 150,
    valueFormatter: ({ value }) => value.nombre
  },
];

export default function Alumnos() {

const [isRows, setIsRows] = useState([]);
const [message, setMessage] = React.useState('');
const [token, isToken] = React.useState('');
const baseUrl = 'https://prepanet-366500.wl.r.appspot.com/api/alumnos/historial-cursos/';
const [rowsAlumno, setIsRowsAlumno] = useState([]); 
const [isSubmitted, setIsSubmitted] = useState(false);
const handleRowClick = (params) => {
  setIsSubmitted(true);
  setMessage(`${params.row.firstName || ''} ${params.row.lastName || ''}" clicked`); 
  axios.post('https://prepanet-366500.wl.r.appspot.com/api/auth/generate-token/', {email: "Bettye_Willms@tec.mx", password: '1234'},
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

useEffect(() => {
  axios.get("https://prepanet-366500.wl.r.appspot.com/api/alumnos/")
    .then(res => {
      //console.log(res)
      setIsRows(res.data)
    })
    .catch(err => {
      console.log(err)
    })
},[]);

    
  return (
    <div className="Back">
        <div className="TopBar">
        </div>
        <Stack direction="row" spacing={32}>
    <Sidenav/>
        <div className="allCharts">
          <Stack direction="row" spacing={5} mt={2}>
          <div className="tableSett">
            <Box sx={{ pt: 4, pl: 3, height: '90%', width: '95%' }}>
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
