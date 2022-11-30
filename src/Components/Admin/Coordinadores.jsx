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
import Typography from '@mui/material/Typography';
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';

const columnAlumno = 
[
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'first_name',
    headerName: 'Nombre',
    width: 150,
  },
  {
    field: 'last_name',
    headerName: 'Apellido',
    width: 150,
  },
  {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.first_name || ''} ${params.row.last_name || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'taller',
    headerName: 'Taller',
    width: 170,
    valueGetter: ({ value }) => {
      if (value) {
        return value.nombre
      } else {
        return "No tiene Taller"
      }
    }
  },
];

const columnsCoord = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'nombre',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'apellido',
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
      `${params.row.nombre || ''} ${params.row.apellido || ''}`,
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
    valueGetter: ({ value }) => value.nombre,
  },
];

export default function Settings() {
  const authCTX = useContext(AuthContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRows, setIsRows] = useState([]);
  const [message, setMessage] = React.useState('');
  const [isRowsEstudiante, setIsRowsEstudiante] = useState([]);
  const baseUrl = 'https://prepnet.uc.r.appspot.com/api/admin/coordinadores/';
  const baseUrl2 = 'https://prepnet.uc.r.appspot.com/api/admin/coordinador/';

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
    setMessage(`${params.row.nombre || ''} ${params.row.apellido || ''} clicked`); 
    axios.get(`${baseUrl2}${params.row.id}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
      .then((response) => {
        console.log(response.data);
        setIsRowsEstudiante(response.data);
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
      <DataGrid columns={columnAlumno} rows={isRowsEstudiante} pageSize={5} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}} autoHeight/>
    </Box>
    </div>
  );

  return (
<div className="Back">
        <Stack direction="row" spacing={"2%"}>
    <Sidenav/>
        <div className="allCharts">
        <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Lista de Coordinadores </Typography> 
          </Box>
          <Stack direction="row" spacing={5} mt={2}>
          <div className="tableSett">
            <Box sx={{ pt: 4, pl: 3, height: '90%', width: '95%' }}>
              <DataGrid rows={isRows} columns={columnsCoord}  onRowClick={handleRowClick} pageSize={15} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
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