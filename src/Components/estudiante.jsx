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


export default function DividerStack() {
  
const [token, isToken] = React.useState('');
const baseUrl = 'https://prepanet-366500.wl.r.appspot.com/api/alumnos/historial-cursos/';
const [rowsAlumno, setIsRowsAlumno] = useState([]); 
const [isSub, setIsSub] = useState(false);

useEffect(() => {
  axios.post('https://prepanet-366500.wl.r.appspot.com/api/auth/generate-token/', {email: "Bettye_Willms@tec.mx", password: '1234'},
  { headers: {"Content-Type" : 'application/json'}})
  .then(res=>{
  //console.log(res.data);
  axios.get(`${baseUrl}`, { headers: {"x-auth-token": res.data.token}})
    .then((response) => {
      console.log(response.data)
      setIsSub(true);
      console.log(isSub);
      setIsRowsAlumno(response.data);
    });
  })
}, []);


  return (
    <div className="Back">
        <div className="TopBar">
        </div>
    <Stack direction="row" spacing={35}>
    <Sidenav/>  
    <Stack spacing={2}>
        <Stack 
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          mt={2}
          mb={2}
        >
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rowsAlumno[0]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[0]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[1]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
            {rowsAlumno[1]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
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
  
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          paddingBottom={5}
        >
  
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[3]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[3]?.description || "Not loaded yet"}
          </Typography>
        </CardContent>
      </Card>
  
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {rowsAlumno[4]?.nombre || "Not loaded yet"}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='justify'>
          {rowsAlumno[4]?.description || "Not loaded yet" }
          </Typography>
        </CardContent>
      </Card>
  
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
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