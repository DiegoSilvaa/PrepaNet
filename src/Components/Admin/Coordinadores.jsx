import "/src/styles/Coor.css"
import * as React from 'react';
import Box from '@mui/material/Box';
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
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
];

const columns = [
  { field: 'id', headerName: 'Matricula', width: 100 },
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
    width: 150,
  },
  {
    field: 'campus',
    headerName: 'Campus',
    width: 170,
    //valueFormatter: ({ value }) => value.name
  },
];

const tablaDummy = (
  [{"id":1,"firstName":"Adriana","lastName":"Cantu","email":"adriana.cantu@tec.mx","campus":{"id":2,"name":"Guadalajara"},
  "estudiantes":[{"id":1,"firstName":"Diego"},{"id":2,"firstName":"Diego"},{"id":3,"firstName":"Diego"},{"id":4,"firstName":"Diego"}]},
  {"id":2,"firstName":"Ramiro","lastName":"Lopez","email":"ramiro.lopez@tec.mx","campus":{"id":3,"name":"Laguna"},
  "estudiantes":[{"id":1,"firstName":"Diego"},{"id":2,"firstName":"Diego"},{"id":3,"firstName":"Diego"},{"id":4,"firstName":"Diego"}]},
  {"id":3,"firstName":"Andres","lastName":"Fernandez","email":"andres.fernandez@tec.mx","campus":{"id":3,"name":"Laguna"},
  "estudiantes":[{"id":1,"firstName":"Diego"},{"id":2,"firstName":"Diego"},{"id":3,"firstName":"Diego"},{"id":4,"firstName":"Diego"}]},]
);

export default function Settings() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRows, setIsRows] = useState([]);
  const [message, setMessage] = React.useState('');
  const [adminName, setAdminName] = React.useState('');
  const [adminLast, setAdminLast] = React.useState('');
  const [isRowsEstudiante, setIsRowsEstudiante] = useState([]);

  const Footer = () => {
    const apiRef = useGridApiContext();
    
    const handleRowClick = (params) => {
      setIsSubmitted(true);
      setMessage(`${params.row.firstName || ''} ${params.row.lastName || ''} clicked`);
      setAdminLast(params.row.lastName);
      setAdminName(params.row.firstName);
      setIsRowsEstudiante(params.row.estudiantes);
    };
    //console.log(isRowsEstudiante);
    useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);
  };


  useEffect(() => {
    axios.get("https://prepanet-366500.wl.r.appspot.com/api/coordinadores/")
      .then(res => {
        //console.log(res)
        setIsRows(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const renderTable = (
    <div className="contenidoTabla">
    <div>
      {message}
    </div>
    <Box sx={{ pt: 4, pl: 2, height: '100%', width: '95%' }}>
      <DataGrid
        columns={columnAlumno}
        rows={isRowsEstudiante}
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
            <Box sx={{ pt: 4, pl: 3, height: '90%', width: '95%' }}>
              <DataGrid
                rows={tablaDummy}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                components={{
                  Toolbar: GridToolbar, Footer
                }}
              />
            </Box>
            </div>
            <div className="tableStats">
            <Box sx={{ pt: 4, pl: 2, height: '90%', width: '95%' }}>
              {isSubmitted ? renderTable : <label> Selecciona una cuenta de Admin </label>}
            </Box>
            </div>
            </Stack>
        </div>
        </Stack>
      </div>
  )
}