import React, { Component } from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Sidenav from '/src/Components/sidenavEst.jsx';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import Box from '@mui/material/Box';

export default function DividerStack() {
const authCTX = useContext(AuthContext);
const baseUrl = 'https://prepnet.uc.r.appspot.com//api/alumnos/historial-cursos/';
const [rowsAlumno, setIsRowsAlumno] = useState([]); 

useEffect(() => {
  axios.get(`${baseUrl}`, { headers: {"x-auth-token": authCTX.token}})
    .then((response) => {
      //console.log(response.data)
      setIsRowsAlumno(response.data);
    })
    .catch(err =>{
      console.log(err)
    })
    ;
}, []);

function getColor(index){
  var val = rowsAlumno[index]?.estatus || "white"
  //console.log(val);
  if (val === 'Sin Cursar') {
    return '#D7DBDD'
  }
  else if (val === 'Cursando') {
    return 'white'
  }
  else if (val === 'Aprobado') {
    return '#2ECC71'
  }
  else if (val === 'Reprobado') {
    return '#E74C3C '
  } else {
    return 'white'
  }
};

  return (
    <div className="Back">
        <Stack direction="row" spacing={"16%"}>
    <Sidenav/>
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Box sx={{height: '10%', width:'95%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
        <Typography variant="h5"> Lista de Periodos </Typography> 
      </Box>
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} mt={1} ml={3}>
      <Card sx={{ width: '30%',height: '95%', backgroundColor: getColor(0), }}>
        <CardMedia component="img" alt="green iguana" height="140" image="./src/public/lide1.jpeg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rowsAlumno[0]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[0]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ width: '30%', height: '95%', backgroundColor: getColor(1), }}>
        <CardMedia component="img"alt="green iguana"height="140"image="./src/public/motivaciones.png"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[1]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
            {rowsAlumno[1]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ width: '30%',height: '95%',backgroundColor: getColor(2), }}>
        <CardMedia component="img"alt="green iguana"height="140"image="./src/public/emociones.jpg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[2]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[2]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
        </Stack>
  
        <Stack direction="row"divider={<Divider orientation="vertical" flexItem />}spacing={2} ml={3}>
          <Card sx={{ width: '30%',height: '95%',backgroundColor: getColor(3), }}>
        <CardMedia component="img"alt="green iguana"height="140"image="./src/public/relaciones.jpg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[3]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[3]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ width: '30%',height: '95%',backgroundColor: getColor(4), }}>
        <CardMedia component="img"alt="green iguana"height="140"image="./src/public/areas.jpg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[4]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[4]?.description || "Not loaded yet" }
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ width: '30%',height: '95%',backgroundColor: getColor(5), }}>
        <CardMedia component="img"alt="green iguana"height="140"image="./src/public/metas.jpg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[5]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[5]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
      </Stack>
      </Stack>
    </Stack>
    </div>
  );
}