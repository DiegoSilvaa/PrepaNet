import React, { Component } from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Sidenav from '/src/Components/sidenavEst.jsx';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function Inscripcion() {
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
        backgroundColor: 'white',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
        ml: 1.5,
      }}>
        <Typography variant="h3">
        Sistema de Inscripciones
      </Typography>
    </Box>

    <Stack direction="row" spacing={3}>
    <Box
        sx={{
        width: 450,
        height: 450,
        backgroundColor: 'white',
        borderRadius: '1%',
        display: 'flex', 
        justifyContent: 'center',
        border: 1,
      }}>
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
        border: 1,
      }}>
        <div className="imageInsstyle">
        <img src="src\public\prepanetEst.png" width="100%" height="60%"></img>
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