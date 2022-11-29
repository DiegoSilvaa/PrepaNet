import React, { Component } from "react";
import "/src/styles/Home.css"
import Chart from "react-apexcharts";
import Sidenav from '/src/Components/Sidenav.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
class App extends Component {

  //https://apexcharts.com/docs/update-charts-from-json-api-ajax/

  constructor(props) {
    super(props);

this.state = {
  options: {
    chart: {
      id: "basic-bar",
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },
    colors: ['#189de4'],
    xaxis: {
      categories: ["Campus Mty","Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty"]
    },
    title: {
      text: 'Alumnos por Campus'
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70]
    }
  ]
};
  
this.state2 = {

  series: [44, 55],
  options: {
    chart: {
      width: 380,
      type: 'pie',
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
    },
    title: {
      text: 'Alumnos por Genero'
    },
    colors: ['#189de4', '#46648c'],
    labels: ['Hombres', 'Mujeres'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};

 this.state3 = {
          
            series: [{
              name: 'Taller 1',
              data: [44, 55, 41, 37, 22, 43, 21]
            }, {
              name: 'Taller 2',
              data: [53, 32, 33, 52, 13, 43, 32]
            }, {
              name: 'Taller 3',
              data: [12, 17, 11, 9, 15, 11, 20]
            }, {
              name: 'Taller 4',
              data: [9, 7, 5, 8, 6, 9, 4]
            }, {
              name: 'Taller 5',
              data: [25, 12, 19, 32, 25, 24, 10]
            }, {
              name: 'Taller 6',
              data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
              chart: {
                type: 'bar',
                height: "100%",
                width: '100%',
                stacked: true,
                redrawOnWindowResize: true,
                redrawOnParentResize: true,

              },
              colors: ['#189de4', '#46648c', '#52b7e9', '#146ca4','#16d4fb','#0885fa'],
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: {
                    total: {
                      enabled: true,
                      offsetX: 0,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    }
                  }
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Talleres por Campus'
              },
              xaxis: {
                categories: ["Campus Mty","Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty"]
              },
              yaxis: {
                categories: [1,2,3,4,5,6]
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'top',
                horizontalAlign: 'center',
                offsetX: 40
              },
            },   
          };

    this.state4 = {
          
            series: [44, 55, 41, 17, 15,23],
            options: {
              chart: {
                type: 'donut',
                redrawOnWindowResize: true,
                redrawOnParentResize: true,
                height: "100%",
                width: '100%',
              },
              title: {
                text: 'Talleres Totales por Campus'
              },
              colors: ['#189de4', '#46648c', '#52b7e9', '#146ca4','#16d4fb','#0885fa'],
              labels: ['Taller_1', 'Taller_2','Taller_3','Taller_4','Taller_5','Taller_6'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                    redrawOnWindowResize: true,
                    redrawOnParentResize: true,
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },  
          };
}

  
  render() {
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
                <Chart id="chartr" options={this.state2.options} series={this.state2.series} type="pie" height="100%" width="100%"/>
            </Box>
          </div>
          <div className="chart1">
              <Box sx={{width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
                <Chart id="chartr" options={this.state4.options} series={this.state4.series} type="donut" height="100%" width="100%"/>
              </Box>
          </div>
          </Stack>
          <Stack spacing={0}>
          <div className="chart2">
          <Box sx={{ mt: 2, width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
            <Chart id="chartl" options={this.state.options} series={this.state.series} type="bar" height="100%" width="100%"/>
          </Box>
          </div>
          <div className="chart2">
          <Box sx={{ width: "100%", height: "80%", backgroundColor: 'white', borderRadius: '1%', border: 1}}>
            <Chart id="chartl" options={this.state3.options} series={this.state3.series} type="bar" height="100%" width="100%"/>
          </Box>
          </div>
          </Stack>
          </Stack>
          </div>
          </Stack>
        </div>
    );
  }
}

export default App;
