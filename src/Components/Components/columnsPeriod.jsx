export const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'nombre',
      headerName: 'Periodo',
      width: 135,
    },
    {
      field: 'isActive',
      headerName: 'Activo',
      type: 'boolean',
      sortable: false,
      width: 70,
    },
    {
      field: 'createdAt',
      type: 'dateTime',
      headerName: 'Fecha de creacion',
      width: 200,
    },
  ];