import * as React from 'react';
import '/src/styles/Alumnos.css'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

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
    field: 'age',
    headerName: 'Age',
    width: 110,
  },
  {
    field: 'campus',
    headerName: 'Campus',
    width: 170,
  },
  {
    field: 'curso',
    headerName: 'Taller',
    width: 150,
  },
];

const rows = [
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
  { id: "A00830001", lastName: 'Silva', firstName: 'Diego', age: 20, campus: "Campus Monterrey", curso: "Taller_1" },
];

export default function Alumnos() {
  return (
    <div className="Back">
      <div className="TopBar"></div>
      <div className="MidBar">
        <Box sx={{ pt: 3, pl:4, height: '90%', width: '95%' }}>
          <DataGrid
            rows={rows}
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
