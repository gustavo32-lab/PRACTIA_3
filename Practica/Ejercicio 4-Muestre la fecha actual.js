function mostrarFechaActual() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const fechaActual = new Date();
    const diaSemana = diasSemana[fechaActual.getDay()];
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();
    
    const fechaFormateada = `${diaSemana}, ${dia} de ${mes} del ${año}`;
    
    console.log(fechaFormateada);
  }
  
  mostrarFechaActual();
  