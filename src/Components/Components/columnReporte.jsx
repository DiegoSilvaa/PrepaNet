export const columnReporte = 
[
  { field: 'matricula', headerName: 'ID', width: 50 },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 320,
  },
  {
    field: 'taller',
    headerName: 'Taller',
    width: 100,
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    width: 120,
  },
  {
    field: 'periodo',
    headerName: 'Estatus',
    width: 120,
  },
  {
    field: 'campus',
    type: 'string',
    headerName: 'Campus',
    width: 170,
    valueGetter: ({ value }) => value.nombre,
  }
];