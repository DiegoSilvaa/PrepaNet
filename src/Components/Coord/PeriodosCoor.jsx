import "/src/styles/Periodos.css"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Sidenav from '/src/Components/sidenavCoor.jsx';
import Stack from '@mui/material/Stack';
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import { useEffect } from "react";
import axios from 'axios'
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

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'nombre',
    headerName: 'Periodo',
    width: 140,
  },
  {
    field: 'isActive',
    headerName: 'Activo',
    sortable: false,
    width: 110,
  },
  {
    field: 'createdAt',
    headerName: 'Fecha de creacion',
    width: 200,
  },
];


export default function Statistics() {
  const authCTX = useContext(AuthContext);
  const [isRows, setRows] = React.useState([]);
  const [fin, setFin] = React.useState('');
  const [inicio, setInicio] = React.useState('');
  const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/periods/';
  const baseUrl2 = 'https://prepnet.uc.r.appspot.com/api/coords/current-period/';


  useEffect(() => {
    axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
      .then((response) => {
        console.log(response.data)
        setRows(response.data);
      })
      .catch(err =>{
        console.log(err);
      })
      ;
  }, []);

  const handleChangeInicio = (event) => {
    setInicio(event.target.value);
    //console.log(inicio);
  };

  const handleChangeFin = (event) => {
    setFin(event.target.value);
    //console.log(fin);
  };

  const handleUpdateAllRows = (e) => {

  };


  return (
    <div className="Back">
        <div className="TopBar">
        </div>
        <Stack direction="row" spacing={45}>
    <Sidenav/>
        <div className="allCharts">
        <Stack direction="row" spacing={5} mt={2}>
      <div className="tableSettP">
        <div className="title2">
          <b>Agregar Periodos</b>
        </div>
        <div className="InfoStats">
          <p> <strong>Inicio </strong> y <strong>Fin</strong> de periodo. </p>
        </div>
        <div className="Form_1">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Inicio</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping" onChange={handleChangeInicio}>
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
            <Select defaultValue="" id="grouped-select" label="Grouping" onChange={handleChangeFin}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {meses.map((name) => (
                <MenuItem key={name} value={name}> {name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="Form_1">
          <Button variant="contained" endIcon={<SendIcon />} 
          onClick={() => {handleUpdateAllRows}}> Send </Button>
        </div>
      </div>
      <div className="tableStatsP">
        <Box sx={{ pt: 4, pl: 3, height: '90%', width: '90%' }}>
          <DataGrid
            rows={isRows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>
      </Stack>
    </div>
    </Stack>
    </div>
  )
}