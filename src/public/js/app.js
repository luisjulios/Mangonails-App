
document.addEventListener('DOMContentLoaded', function(){
  // nombre();
  // telefono();
  // email();
  // servicioSel();
  // retiro();
  // fechaReserva();
  // horaReserva();
  // enviar();
});
// function nombre() {
//   const nombreInput = document.querySelector('#nombre_apellido');
//   nombreInput.addEventListener('input', e => {
//     const nombreTexto = e.target.value.trim();
//     //Validacion de que nombreTexto debe tener algo
//     if(nombreTexto === '' || nombreTexto.length < 3) {
//       console.log('Nombre no válido', 'error');
//     } else {
//       reserva.nombre = nombreTexto;
//     }
//   });
// }
// function email() {
//   const emailInput = document.querySelector('#email');
//   emailInput.addEventListener('input', e => {
//     const email = e.target.value.trim();
//     //Validacion de que email debe tener algo
//     if(email === '') {
//       console.log('Email no válido', 'error')
//     } else {
//       reserva.email = email;
//     }
//   });
// }
// function telefono() {
//   const telefonoInput = document.querySelector('#telefono');
//   telefonoInput.addEventListener('input', e => {
//     const telefono = e.target.value.trim();
//     //Validacion de que telefono debe tener algo
//     if(telefono === '' || telefono.length < 9) {
//       console.log('Teléfono no válido', 'error')
//     } else {
//       reserva.telefono = telefono;
//     }
//   });
// }
// function servicioSel () {
//   const servicio = document.getElementById('servicio');
// servicio.addEventListener('change',
//   function(){
//     const servicioSel = this.options[servicio.selectedIndex].text;
//     reserva.servicio = servicioSel;
//   });
// }
// function retiro (){
//   const retiro = document.getElementById('retiro');
// retiro.addEventListener('change',
//   function(){
//     const retiroSel = this.options[retiro.selectedIndex].text;
//     reserva.retiro = retiroSel;
//   });
// }
// function fechaReserva() {
//   $("#fecha").change(function() {
//     const fechaReserva = $('#fecha').val();
//     reserva.fecha = fechaReserva;
//   });
// }
// function horaReserva () {
//   const selectHora = document.getElementById('hora');
// selectHora.addEventListener('click',
//   function(){
//     const horaReserva = this.options[selectHora.selectedIndex].text;
//     reserva.hora = horaReserva;
//   });
// }
// function enviar(){
//   const btn = document.querySelector('#btnEnviar');
//     btn.addEventListener('click', 
//     function(e){

//     }
//     )
// }

$(function(){
  $("#fecha").datepicker({
      minDate: '3d',
      maxDate: '15d',
      beforeShowDay: $.datepicker.noWeekends,
      dateFormat: "dd/mm/yy",
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      firstDay: 1,
      });
});