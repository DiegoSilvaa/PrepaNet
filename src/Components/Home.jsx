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
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
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
}

  
  render() {
    return (
      <div className="Back">
        <div className="TopBar"></div>
        <div className="Chart-top-left">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="280"
            width="670"
          />
        </div>
        <div className="Chart-top-right">
          <Chart
            options={this.state2.options}
            series={this.state2.series}
            type="pie"
            height="280"
            width="400"
          />
        </div>
        <div className="Chart-bottom-left">
        </div>
        <div className="Chart-bottom-right">
        </div>
      </div >
    );
  }
}

export default App;
