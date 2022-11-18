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

const baseUrl = 'https://prepnet.uc.r.appspot.com/api/alumnos/curso-inscribir/';
const baseUrl2 = 'https://prepnet.uc.r.appspot.com/api/alumnos/inscribir/';

export default function Inscripcion() {
const [token, isToken] = React.useState('');

const [rowsAlumno, setIsRowsAlumno] = useState([]); 
const [isSub, setIsSub] = useState(false);
useEffect(() => {
  axios.post('https://prepnet.uc.r.appspot.com/api/auth/generate-token/', {email: "Jackson_Stiedemann53@tec.mx", password: '1234'},
  { headers: {"Content-Type" : 'application/json'}})
  .then(res=>{
  //console.log(res.data);
  axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": res.data.token}})
    .then((response) => {
      console.log(response.data)
      //console.log(isSub);
      setIsRowsAlumno(response.data);
    })
    .catch(err =>{
      console.log(err)
    })
    ;
  })


}, []);

const handleRowClick = () => {

  let token;

  // console.log("hey")
  axios.post('https://prepnet.uc.r.appspot.com/api/auth/generate-token/', {email: "Jackson_Stiedemann53@tec.mx", password: '1234'},
  { headers: {"Content-Type" : 'application/json'}})
    .then(res=>{
      console.log(res.data.token);
      token = res.data.token
      axios.post('https://prepnet.uc.r.appspot.com/api/alumnos/inscribir/'+rowsAlumno.id+'/',{ }, {
        headers:{
          'x-auth-token': token
        }
      }).then(res=>{  
        setIsSub(true);
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    })
};

  return (
    <div className="Back">
        <div className="TopBar">
        </div>
        <Stack direction="row" spacing={43}>
    <Sidenav/>
      <Stack
        direction="row"
        paddingBottom={5}>
    
    <Box
    sx={{
        mt: 2,
        width: 1000,
        height: 590,
        backgroundColor: 'white',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
      }}>
    <Stack spacing={2}>
        <Box
        sx={{
        mt: 2,
        width: 900,
        height: "12%",
        backgroundColor: '#0077b6',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
        ml: 1.5,
      }}>
        <Typography variant="h2" color="white">
        Sistema de Inscripciones
      </Typography>
    </Box>

    <Stack direction="row" spacing={3}>
    <Box
        sx={{
        mt: 1,
        width: 450,
        height: 450,
        backgroundColor: 'white',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
      }}>
    <Card sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./src/public/ins.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {rowsAlumno?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
        <CardActions>
      <Button size="small" onClick={() => handleRowClick()} > Inscribirte </Button>
    </CardActions>
      </Card>
      </Box>

    <Box
        sx={{
        mt: 1,
        width: 450,
        height: 450,
        backgroundColor: 'white',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
      }}>
        <div className="imageInsstyle">
        <img src="src\public\prepanetEst.png" width="100%" height="90%"></img>
        </div>
    </Box>
      </Stack>
    </Stack>
    </Box>
    </Stack>
    </Stack>
    </div>
  );
}