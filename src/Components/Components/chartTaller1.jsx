export const chartTaller1 = {
          
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