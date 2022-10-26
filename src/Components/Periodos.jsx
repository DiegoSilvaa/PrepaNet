import "/src/styles/Periodos.css"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridLinkOperator } from '@mui/x-data-grid';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Campus_1',
  'Campus_2',
  'Campus_3',
  'Campus_4',
  'Campus_5',
  'Campus_6',
  'Campus_7',
  'Campus_8',
];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const cursos = [
  'taller-1',
  'taller-2',
  'taller-3',
  'taller-4',
  'taller-5',
  'taller-6',
]

const claves = [
  'mty1',
  'mty2',
  'mty3',
  'mty4',
  'mty5',
  'mty6',
  'mty7',
  'mty8',
]

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'periodoInicio',
    headerName: 'Inicio del Periodo',
    width: 140,
  },
  {
    field: 'periodoFin',
    headerName: 'Fin del Periodo',
    width: 140,
  },
  {
    field: 'iniFin',
    headerName: 'Periodo',
    sortable: false,
    width: 110,
    valueGetter: (params) =>
      `${params.row.periodoInicio || ''} - ${params.row.periodoFin || ''}`,
  },
  {
    field: 'campus',
    headerName: 'Campus',
    width: 150,
  },
    {
    field: 'cursos',
    headerName: 'Taller',
    width: 110,
  },
    {
    field: 'clave',
    headerName: 'Clave',
    width: 100,
  },
];

const rows = [
  {id: 1, periodoInicio: "Dic", periodoFin:"Ago", campus:"Campus Monterrey", cursos:"Taller_1", clave:"Mty_1"},
]


export default function Statistics() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value,);
  };

  return (
    <div className="Back">
      <div className="TopBar"></div>
      <div className="tableSett">
        <div className="title2">
          <b>Agregar Periodos</b>
        </div>
        <div className="InfoStats">
          <p> <strong>Inicio </strong> y <strong>Fin</strong> de periodo. </p>
        </div>
        <div className="Form_1">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Inicio</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {meses.map((name) => (
                <MenuItem key={name} value={name}>{name} </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">Fin</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {meses.map((name) => (
                <MenuItem key={name} value={name}> {name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="InfoStats">
          <p> Selecciona el <strong>Campus</strong>.</p>
        </div>
        <div className="Form_1">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Campus</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Campus" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="InfoStats">
          <p> <strong>Curso </strong> y <strong>Clave</strong> del taller. </p>
        </div>
        <div className="Form_1">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Curso</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {cursos.map((name) => (
                <MenuItem key={name} value={name}>{name} </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-select">Clave</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {claves.map((name) => (
                <MenuItem key={name} value={name}> {name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="Form_1">
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </div>
      <div className="tableStats">
        <Box sx={{ pt: 4, pl: 3, height: '90%', width: '95%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>
    </div>
  )
}