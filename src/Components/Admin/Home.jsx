import React, { Component } from "react";
import "/src/styles/Home.css"
import Chart from "react-apexcharts";
import Sidenav from '/src/Components/Sidenav.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { chartTaller2 } from "/src/Components/Components/chartTaller2.jsx";
import { chartTaller1 } from "/src/Components/Components/chartTaller1.jsx";
import { chartAlumnosCampus } from "/src/Components/Components/chartAC.jsx";
import { chartGenero } from "/src/Components/Components/chartGenero.jsx";

  //https://apexcharts.com/docs/update-charts-from-json-api-ajax/
  export default function Dashbord() {
    return (
      <div className="Back">
        <Stack direction="row" spacing={'2%'}>
    <Sidenav/>
        <div className="allCharts">
        <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Dashbord de Admin </Typography> 
          </Box>
        <Stack direction="row" spacing={5}>
          <Stack spacing={0}>
            <div className="chart1">
              <Box sx={{mt: 2,width: "100%",height: "80%",backgroundColor: 'white',borderRadius: '1%',border: 1}}>
                <Chart id="chartr" options={chartGenero.options} series={chartGenero.series} type="pie" height="100%" width="100%"/>
            </Box>
          </div>
          <div className="chart1">
              <Box sx={{width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
                <Chart id="chartr" options={chartTaller2.options} series={chartTaller2.series} type="donut" height="100%" width="100%"/>
              </Box>
          </div>
          </Stack>
          <Stack spacing={0}>
          <div className="chart2">
          <Box sx={{ mt: 2, width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
            <Chart id="chartl" options={chartAlumnosCampus.options} series={chartAlumnosCampus.series} type="bar" height="100%" width="100%"/>
          </Box>
          </div>
          <div className="chart2">
          <Box sx={{ width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
            <Chart id="chartl" options={chartTaller1.options} series={chartTaller1.series} type="bar" height="100%" width="100%"/>
          </Box>
          </div>
          </Stack>
          </Stack>
          </div>
          </Stack>
        </div>
    );
  }

