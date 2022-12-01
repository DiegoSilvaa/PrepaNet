export const columnReporte = 
[
  { field: 'matricula', headerName: 'ID', width: 90 },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 150,
  },
  {
    field: 'taller',
    headerName: 'Taller',
    width: 320,
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    width: 100,
  },
  {
    field: 'periodo',
    headerName: 'Estatus',
    width: 135,
  },
  {
    field: 'campus',
    type: 'string',
    headerName: 'Campus',
    width: 100,
    valueGetter: ({ value }) => value.nombre,
  }
];