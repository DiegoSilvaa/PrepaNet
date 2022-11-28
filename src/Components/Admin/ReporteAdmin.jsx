import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Sidenav from '/src/Components/sidenav.jsx';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import Box from '@mui/material/Box';

export default function DividerStack() {
    const authCTX = useContext(AuthContext);
    const [isRows, setRows] = React.useState([]);
    const baseUrl = 'https://prepnet.uc.r.appspot.com/api/admin/reporte/';  

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

    function getColor(index){
        var val = index
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

      function getImage(index){
        var val = index
        //console.log(val);
        if (val === "Liderazgo Positivo y Transformación Personal") {
          return './src/public/lide1.jpeg'
        }
        else if (val === 'Mis habilidades y motivaciones') {
          return './src/public/motivaciones.png'
        }
        else if (val === 'Mis emociones') {
          return './src/public/emociones.jpg'
        }
        else if (val === 'Mis relaciones') {
          return './src/public/relaciones.jpg'
        } 
        else if (val ==='Mis áreas de oportunidad') {
          return './src/public/areas.jpg'
        } 
        else if (val === 'Mis metas') {
            return './src/public/metas.jpg'
        }
      };

    return (
        <div className="Back">
        <Stack direction="row" spacing={30}>
    <Sidenav/>
        <Stack spacing={5}>
        {isRows.map(item => {
            return <Card sx={
                { maxWidth: 345,
                  backgroundColor: getColor(item.estatus),
                  marginTop: 4}}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={getImage(item.taller)}
                />
                <CardContent>
                    <Typography> Matricula: {item.matricula} </Typography>
                    <Typography> Email: {item.email} </Typography>
                    <Typography> Periodo: {item.periodo} </Typography>
                    <Typography> Taller: {item.taller} </Typography>
                    <Typography> Estatus: {item.estatus} </Typography>
                </CardContent>
            </Card>
        })}
        </Stack>
    </Stack>
    </div>
    );
};