alert ("Bienvenidos al gestor de turnos");

let nombreIngresado = prompt("Por favor ingrese su nombre");
let correoIngresado = prompt("Indique su correo electronico");
let diaIngresado = prompt("Ingrese el dia que solicita turno: Miercoles 1, Jueves 2, Viernes 3");
let horaIngresada = prompt("Defina el horario: 11hs, 11:30hs, 16hs");

   
function sumar (nombreIngresado, correoIngresado, diaIngresado, horaIngresada) {
    alert (nombreIngresado + correoIngresado + diaIngresado + horaIngresada);
}

alert ("Su turno fue confirmado con los siguientes datos");
let resultado = sumar (nombreIngresado, correoIngresado, diaIngresado, horaIngresada);


