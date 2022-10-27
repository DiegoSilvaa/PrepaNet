import * as React from 'react';
import '/src/styles/Alumnos.css'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios'

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
  },
  {
    field: 'taller',
    headerName: 'Taller',
    width: 150,
  },
];
/*
const [isRows, setIsRows] = useState([]);
  fetch("https://prepanet-366500.wl.r.appspot.com/api/alumnos/")
    .then((response) => response.json())
    .then((dog) => {
      console.log(dog)
    }); /*/

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
      <div className="TopBar"></div>
      <div className="MidBar">
        <Box sx={{ pt: 3, pl: 4, height: '90%', width: '95%' }}>
          <DataGrid
            rows={isRows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </div>
    </div>
  );
}
