export const chartAlumnosCampus= {
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