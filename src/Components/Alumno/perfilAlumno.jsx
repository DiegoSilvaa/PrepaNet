import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenavEst.jsx';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState} from "react";
import axios from 'axios'
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
const baseUrl = 'https://prepnet.uc.r.appspot.com/api/alumnos/profile/';

export default function Statistics() {
    const [perfil, setPerfil] = useState([]);
    const authCTX = useContext(AuthContext);
    useEffect(() => {
        axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
          .then((response) => {
            console.log(response.data)
            setPerfil(response.data);
          })
          .catch(err =>{
            console.log(err);
          })
          ;
      }, []);

    return (
        <div className="Back">
                <Stack direction="row" spacing={"2%"}>
            <Sidenav/>
            <div className="allChartsEst">
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Box
                 sx={{mt: 2,width: 625,height: 300,background: 'linear-gradient(to right bottom, #009FFD,#2A2A72)',borderRadius: '5px 5px 0px 0px',display: 'flex', justifyContent: 'center',}}>
                    <Stack spacing={3} justifyContent="center" alignItems="center">
                    <div className="titlePerfil">
                        {perfil?.first_name || "Not loaded yet"} {perfil?.last_name || "Not loaded yet"}
                    </div>
                    <div className="circular--landscape"> <img src="src\public\user.png" /> </div>
                    </Stack>
                </Box>
                <Box
                 sx={{width: 625,height: 250,background: 'white',borderRadius: '0px 0px 5px 5px',display: 'flex',justifyContent: 'center'}}>
                    <Stack spacing={6}>
                    <Typography variant="h5" align="center" gutterBottom sx={{backgroundColor: "#FEF5EF"}}> Informacion Academica </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <Card sx={{ width: 180,backgroundColor: 'white'}}>
                        <Typography variant="h6" color="text.secondary" align='center' sx={{backgroundColor: "#52b7e9",fontWeight: 'bold'}}>
                            Correo
                        </Typography>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary" align='center'>
                            {perfil?.email || "Not loaded yet"}
                        </Typography>
                        </CardContent>
                        </Card>

                        <Card sx={{ width: 180, backgroundColor: 'white'}}>
                        <Typography variant="h6" color="text.secondary" align='center' sx={{backgroundColor: "#52b7e9",fontWeight: 'bold'}}>
                            Campus
                        </Typography>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary" align='center'>
                            {perfil?.campus?.name || "Not loaded yet"}
                        </Typography>
                        </CardContent>
                        </Card>

                        <Card sx={{ width: 180, backgroundColor: 'white'}}>
                        <Typography variant="h6" color="text.secondary" align='center' sx={{backgroundColor: "#52b7e9",fontWeight: 'bold'}}>
                            Matricula
                        </Typography>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary" align='center'>
                            {perfil?.matricula || "Not loaded yet"}
                        </Typography>
                        </CardContent>
                        </Card>
                        </Stack>
                    </Stack>
                </Box>
                </Stack>
                </div>
            </Stack>
            </div>
            );
}