export const chartGenero = {

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