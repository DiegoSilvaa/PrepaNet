export const chartTaller2 = {
          
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