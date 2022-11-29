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
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { columns } from "/src/Components/Components/columnsPeriod.jsx";
import { meses } from "/src/Components/Components/meses.jsx";

export default function Statistics() {
  const authCTX = useContext(AuthContext);
  const [isRows, setRows] = React.useState([]);
  const [fin, setFin] = React.useState('');
  const [inicio, setInicio] = React.useState('');
  const [error, setError] = React.useState(false);
  const baseUrl = 'https://prepnet.uc.r.appspot.com/api/coords/periods/';


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
  };

  const handleChangeFin = (event) => {
    setFin(event.target.value);
  };

  const handleUpdateAllRows = (e) => {
    if (inicio && fin) {
    axios.post('https://prepnet.uc.r.appspot.com/api/coords/add-period/',
    {nombre: `${inicio}-${fin}`}, {
        headers:{
          'x-auth-token': authCTX.token
        }
      }).then(res=>{  
        console.log(res)
      })
      .catch(err=>{
        console.log(err.response.data)
      })
    } else {
      setError(true);
    }
  };


  return (
    <div className="Back">
        <Stack direction="row" spacing={"16%"}>
    <Sidenav/>
        <div className="allCharts">
        <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Lista de Periodos </Typography> 
          </Box>
        <Stack direction="row" spacing={5} mt={2} ml={'11%'}>
        <div className="tableSettP">
          <Stack spacing={4} direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h5"> Agregar Periodos </Typography> 
            <p> <strong>Inicio </strong> y <strong>Fin</strong> de periodo. </p>
            <FormControl sx={{   width: "50%"}}>
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
            <FormControl sx={{ width: "50%" }}>
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
            <Button variant="contained" endIcon={<SendIcon />} 
            onClick={() => handleUpdateAllRows()}  sx={{width: "50%"}}> Send </Button>
            {error ? <Alert severity="error"> Selecciona los meses </Alert> : <div></div>}
            </Stack>
            </div>
        <div className="tableStatsP">
          <Box sx={{ pt: 4, pl: 3, height: '90%', width: '90%' }}>
            <DataGrid rows={isRows} columns={columns} pageSize={15} rowsPerPageOptions={[15]} components={{Toolbar: GridToolbar}}/>
          </Box>
        </div>
        </Stack>
      </div>
    </Stack>
    </div>
  )
}