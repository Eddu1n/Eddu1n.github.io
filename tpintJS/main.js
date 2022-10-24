function calcularPorcentaje() {
  var cantidad,total, categoria,
    ticketEstudiante,ticketTrainee, ticketJr, ticketGeneral;

  console.log('entra a la funcion');

  cantidad = document.getElementById('cantidad').value;
  categoria = document.getElementById('categoria').value;

  console.log('cantidad ' + cantidad + 'categoria ' + categoria);

  ticketEstudiante = 200 - (200 * 80) / 100;
  ticketTrainee = 200 - (200 * 50) / 100;
  ticketJr = 200 - (200 * 15) / 100;
  ticketGeneral = 200;

 
  if (cantidad > 0 ) {
   
    if (categoria == 'Estudiante') {
      total = ticketEstudiante * cantidad;
      document.getElementById('total').innerHTML =
      'Total a Pagar: $' + total;


    } else if (categoria == 'Trainee') {
      total = ticketTrainee * cantidad;
      document.getElementById('total').innerHTML =
      'Total a Pagar: $' + total;


    } else if (categoria == 'Junior') {
      total = ticketJr * cantidad;
      document.getElementById('importeTotal').innerHTML =
      'Total a Pagar: $' + total;


    } else if (categoria == 'General') {
      total = ticketGeneral * cantidad;
      document.getElementById('total').innerHTML =
        'Total a Pagar: $' + total;
    }


  } else {
    window.alert('Ingrese una cantidad valida');
  }
}

function borrado() {
  
  document.getElementById('cantidad').value = '';
  document.getElementById('categoria').value = 'Estudiante';
  document.getElementById('total').innerHTML = 'Total a Pagar:$';
}





