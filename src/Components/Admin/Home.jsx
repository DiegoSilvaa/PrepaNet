import React, { Component } from "react";
import "/src/styles/Home.css"
import Chart from "react-apexcharts";
import Sidenav from '/src/Components/Sidenav.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useEffect, useState } from "react";
import {useContext} from "react";
import AuthContext from '/src/context/AuthContext';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
  //https://apexcharts.com/docs/update-charts-from-json-api-ajax/
  export default function Dashbord() {
    const authCTX = useContext(AuthContext);
    const [nombreCampus, setnameCampus] = useState([]);
    const [tallername, setnameTaller] = useState([]);
    const [datacampus, setDatacampus] = useState([]);
    const [total, setTotal] = useState([]);
    const [promedio, setPromedio] = useState([]);
    const [isRows, setRows] = React.useState([]);
    const baseUrl = 'https://prepnet.uc.r.appspot.com/api/admin/home/';
    const baseUrlPeriod = 'https://prepnet.uc.r.appspot.com/api/admin/periods/';
    const [isSub, setIsSub] = useState(false);
    useEffect(() => {
      const nombre = [];
      const promedio = [];
      const alumnos = [];
      const nomTaller = [];
      axios.get(`${baseUrl}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
        .then((response) => {
          console.log(response.data)
          response.data.alumno_por_campus.map(item => {
              //console.log("item", item)
              nombre.push(item.nombre);
              alumnos.push(item.alumnos)
          })
          response.data.promedios.map(item => {
            //console.log("item", item)
            promedio.push(item.promedio);
            nomTaller.push(item.name)
        })
          // Grafico 1
          setTotal(response.data);
          setnameCampus(nombre);
          setDatacampus(alumnos);
          // Grafico 2
          setnameTaller(nomTaller);
          setPromedio(promedio);
          //
          setIsSub(true);

        }).catch(err =>{
          console.log(err);
        })
        ;
    }, []);

    useEffect(() => {
      axios.get(`${baseUrlPeriod}`, { headers: {"Content-Type" : 'application/json',"x-auth-token": authCTX.token}})
        .then((response) => {
          console.log(response.data)
          setRows(response.data);
        })
        .catch(err =>{
          console.log(err);
        })
        ;
    }, []);

    const chartTaller2 = {
      series: datacampus,
      options: {
        chart: {
          type: 'pie',
          height: '400px',
          width: '100%',
          offsetY: 30,
        },
        colors: ['#189de4', '#46648c', '#52b7e9', '#146ca4','#16d4fb','#0885fa'],
        labels: nombreCampus,
        responsive: [{
          breakpoint: "80%",
          options: {
            chart: {
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'right', 
            }
          }
        }]
      },  
    };

    const chartTaller1 = {
      series: promedio,
      options: {
        chart: {
          type: 'pie',
          height: '400px',
          width: '100%',
          offsetY: 30,
        },
        colors: ['#189de4', '#46648c', '#52b7e9', '#146ca4','#16d4fb','#0885fa'],
        labels: tallername,
        responsive: [{
          breakpoint: "80%",
          options: {
            chart: {
            },
            legend: {
              position: 'bottom',
              horizontalAlign: 'right', 
            }
          }
        }]
      },  
    };

    return (
      <div className="Back">
        <Stack direction="row" spacing={'2%'}>
    <Sidenav/>
        <div className="allCharts">
        <Box sx={{height: '10%', width:'100%', bgcolor: '#146ca4', mt: 2,borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center", display:"flex"}}>
          <Typography variant="h5"> Panel de Admin </Typography> 
          </Box>
          <Stack direction="row" spacing={'5%'} mt={2} justifyContent="center">
          <Box sx={{height: '100%', width:'40%', borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center"}}>
            <Stack spacing={'3%'}>
              <Box sx={{width: "100%", height: "100%", border: 1, borderColor: 'black', backgroundColor: 'white',color: 'black'}}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Tipo de Usuario:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {authCTX.userType}
                  </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Total de Alumnos Inscritos:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {total?.total_alumnos || "Not loaded yet"}
                    </Typography>
                  </CardContent>
                </Card>
                </Box>
                <Box sx={{width: "100%", height: "100%", border: 1, borderColor: 'black', backgroundColor: 'white',pb:'10%',color: 'black'}}>
                <Typography gutterBottom variant="h6" component="div"> Total de Talleres </Typography>
                  {isSub ? <Chart options={chartTaller2.options} series={chartTaller2.series} type="pie"/> : <div>Cargando</div>}
                </Box>
            </Stack> 
          </Box>
          <Box sx={{height: '30%', width:'45%', borderRadius: 1, color: "white", justifyContent:"center",alignItems:"center"}}>
          <Stack spacing={'5%'}>
              <Box sx={{width: "100%", height: "100%", border: 1, borderColor: 'black', backgroundColor: 'white',pb:'10%',color: 'black'}}>
                  <Typography gutterBottom variant="h6" component="div"> Total de Talleres </Typography>
                    {isSub ? <Chart options={chartTaller1.options} series={chartTaller1.series} type="pie"/> : <div>Cargando</div>}
                </Box>

              <Box sx={{width: "100%",height: "100%",backgroundColor: 'white',border: 1, borderColor: 'black',justifyContent:"center",alignItems:"center"}}>
              <Card sx={{ maxWidth: "100%" }}>
              <CardMedia component="img" alt="green iguana" height="140" image="./src/public/period.png" sx={{border: 1}}/>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Perido Actual:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {isRows[0]?.nombre || "Not loaded yet"}
                  </Typography>
                </CardContent>
              </Card>
              </Box>
          </Stack>  
          </Box>
          </Stack>
          </div>
          </Stack>
        </div>
    );
  };

