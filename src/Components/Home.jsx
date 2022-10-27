import React, { Component } from "react";
import "/src/styles/Home.css"
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

this.state = {
  options: {
    chart: {
      id: "basic-bar"
    },
    colors: ['#93C3EE'],
    xaxis: {
      categories: ["Campus Mty","Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty", "Campus Mty"]
    }
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
    },
    colors: ['#93C3EE', '#E5C6A0'],
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
                height: 350,
                stacked: true,
              },
              colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
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
              }
            },   
          };

    this.state4 = {
          
            series: [44, 55, 41, 17, 15,23],
            options: {
              chart: {
                type: 'donut',
              },
              colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
              labels: ['Taller_1', 'Taller_2','Taller_3','Taller_4','Taller_5','Taller_6'],
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
}

  
  render() {
    return (
      <div className="Back">
        <div className="TopBar"></div>
        <div className="Chart-top-left">
          <Chart
            id="chartl"
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="280"
            width="670"
          />
        </div>
        <div className="Chart-top-right">
          <Chart
            id="chartr"
            options={this.state2.options}
            series={this.state2.series}
            type="pie"
            height="280"
            width="400"
          />
        </div>
        <div className="Chart-bottom-left">
          <Chart
            id="chartl"
            options={this.state3.options}
            series={this.state3.series}
            type="bar"
            height="280"
            width="670"
          />
        </div>
        <div className="Chart-bottom-right">
          <Chart
            id="chartr"
            options={this.state4.options}
            series={this.state4.series}
            type="donut"
            height="280"
            width="400"
          />
        </div>
      </div >
    );
  }
}

export default App;
