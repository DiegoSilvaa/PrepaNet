export const columns = [
    { field: 'id', headerName: 'ID', width: 50, type: 'number', },
    { field: 'matricula', headerName: 'Matricula', width: 100, type: 'string',},
    {
      field: 'first_name',
      headerName: 'First name',
      width: 100,
      type: 'string'
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      width: 100,
      type: 'string'
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      type: 'string',
      width: 150,
      valueGetter: (params) =>
        `${params.row.first_name || ''} ${params.row.last_name || ''}`,
    },
    {
      field: 'campus',
      type: 'string',
      headerName: 'Campus',
      width: 100,
      valueGetter: ({ value }) => value.nombre,
    }
  ];