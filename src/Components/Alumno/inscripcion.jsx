import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenavEst.jsx';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState} from "react";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import Alert from '@mui/material/Alert';
const baseUrl = 'https://prepnet.uc.r.appspot.com/api/alumnos/curso-inscribir/';


export default function Inscripcion() {
const authCTX = useContext(AuthContext);
const [rowsAlumno, setIsRowsAlumno] = useState([]); 
const [isSub, setIsSub] = useState(false);
const [complete, setComplete] = useState(false);
const [isSubError, setIsSubError] = useState(false);
const [error, setError] = useState('');
useEffect(() => {
  axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
    .then((response) => {
      console.log(response.data)
      setIsRowsAlumno(response.data);
    })
    .catch(err =>{
      setComplete(true);
    })
    ;
}, []);

const handleRowClick = () => {
      setIsSub(false);
      setIsSubError(false);
      setError(null);
      axios.post('https://prepnet.uc.r.appspot.com/api/alumnos/inscribir/'+rowsAlumno.id+'/',{ }, {
        headers:{
          'x-auth-token': authCTX.token
        }
      }).then(res=>{ 
        setIsSub(true);
        setError("Inscrito")
        console.log(res)
      })
      .catch(err=>{
        console.log(err.response.data)
        setIsSubError(true);
        setError(err.response.data)
      })
};

const handleRowClickDes = () => {
  setIsSub(false);
  setIsSubError(false);
  setError(null);
  axios.post('https://prepnet.uc.r.appspot.com/api/alumnos/desinscribir/',{ }, {
    headers:{
      'x-auth-token': authCTX.token
    }
  }).then(res=>{ 
    //console.log(res.data)
    setIsSub(true);
    setError("Desinscrito")
    //console.log(res)
  })
  .catch(err=>{
    //console.log(err.response.data)
    setIsSubError(true);
    setError(err.response.data)
  })
};

  return (
    <div className="Back">
        <Stack direction="row" spacing={'2%'}>
    <Sidenav/>
    <div className="allChartsEst">
    <Box sx={{mt: 5,width: "90%",height: "100%",backgroundColor: 'white',borderRadius: '5%', justifyContent: 'center', pb: 5, pt: 5}}>
    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Box sx={{width: '95%',height: "12%",backgroundColor: '#0077b6',borderRadius: '1%', justifyContent: 'center'}}>
        <Typography variant="h2" color="white">
        Sistema de Inscripciones
      </Typography>
    </Box>

    <Box sx={{width: '100%', height: '100%', backgroundColor: 'white'}}>
    <Stack direction="row" alignItems="center" justifyContent="space-evenly" ml={8}>
      <Card sx={{ maxWidth: "40%", mb : '2%'}}>
          <CardMedia component="img"alt="green iguana"height="140"image="./src/public/ins.jpg"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align='center'>
            {complete ? <p>Todos los talleres completados.</p> : rowsAlumno?.nombre || "Not loaded yet"}
            </Typography>
            <Typography variant="body2" color="text.secondary" align='justify'>
            {complete ? <p>Sin Cursos.</p> : rowsAlumno?.description || "Not loaded yet"}
            </Typography>
          </CardContent>
          <CardActions>
        <Button size="small" onClick={() => handleRowClick()} > Inscribirte </Button>
        <Button size="small" onClick={() => handleRowClickDes()} > Desinscribirte </Button>
      </CardActions>
      {isSubError ? <Alert severity="error"> {error} </Alert> : <div></div>}
      {isSub ? <Alert severity="success"> {error} </Alert> : <div></div>}
        </Card>
        <div className="imageInsstyle">
            <img src="src\public\prepanetEst.png" width="80%" height="90%"></img>
          </div>
        </Stack>
        </Box>
      </Stack>
    </Box>
    </div>
    </Stack>
    </div>
  );
}