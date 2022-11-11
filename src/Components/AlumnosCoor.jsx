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
import Sidenav from '/src/Components/sidenavCoor.jsx';
import Stack from '@mui/material/Stack';

const Footer = () => {
  const [message, setMessage] = React.useState('');
  const apiRef = useGridApiContext();

  const handleRowClick = (params) => {
    setMessage(`${params.row.firstName || ''} ${params.row.lastName || ''}" clicked`);
  };

  useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);

  return (
    <React.Fragment>
      <GridFooter />
      {message && 
      <div>
      <Alert severity="info">{message}</Alert>
      <div className="infoClicked">
        <label> Curso 1  Aprobado</label>
        <label> Curso 2 Reprobado</label> 
        <label> Curso 3 Reprobado</label> 
        <label> Curso 4 Reprobado</label> 
        <label> Curso 5 Reprobado</label> 
        <label> Curso 6 Reprobado</label> 
        </div>
        </div>}
    </React.Fragment>
  );
};

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
 
  useEffect(() => {
    axios.get("https://prepanet-366500.wl.r.appspot.com/api/alumnos/")
      .then(res => {
        console.log(res)
        setIsRows(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })


  return (
    <div className="Back">
        <div className="TopBar">
        </div>
        <Stack direction="row" spacing={32}>
    <Sidenav/>
        <div className="allCharts">
      <div className="MidBar">
        <Box sx={{ pt: 3, pl: 4, height: '90%', width: '95%' }}>
        <DataGrid
            rows={isRows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            components={{ Toolbar: GridToolbar, Footer}}
          />
        </Box>
      </div>
    </div>
    </Stack>
    </div>
  );
}
