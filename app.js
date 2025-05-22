
// 2.1 Función validarEmail
// Crear una función llamada validarEmail(email) que verifique si un email es válido
// con una expresión regular simple (/@/ y .)

function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

/* 2.2
Función calcularDescuento
Crear una función que reciba un precio y un porcentaje de descuento, y devuelva el
precio final. Probarla con 3 valores distintos.*/
function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje) / 100;
}


/* 2.3
Función generarMensaje(nombre, asunto)
Crear una función que retorne un mensaje del estilo:
    "Gracias NOMBRE por contactarnos sobre ASUNTO. Te responderemos pronto."
    Llamar a la función y mostrar el mensaje en consola.
 */
function generarMensaje(nombre, asunto) {
  const mensaje = `Mensaje de ${nombre} acerca de ${asunto}.`;
  console.log(mensaje);
}



// 3 a- Contador de caracteres
function mostrarCaracteres(textAreaElement, contadorElement){
    contadorElement.innerText = textAreaElement.value.length
}




const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const descuento = parseFloat(document.getElementById("descuento").value);

  if (!validarEmail(email)) {
    alert("Por favor ingresa un email válido.");
    return;
  }

  if (isNaN(precio) || isNaN(descuento) || precio < 0 || descuento < 0) {
    alert("Por favor ingresa un precio y descuento válidos.");
    return;
  }

  generarMensaje(nombre, asunto);

  const precioFinal = calcularDescuento(precio, descuento);
  document.getElementById("respuesta").textContent = `El precio final con un descuento del ${descuento}% es $${precioFinal.toFixed(2)}.`;
});


document.addEventListener('DOMContentLoaded', () => {

    // 3 a- Contador de caracteres
    // Se obtiene el textarea y el párrafo del DOM
    let textAreaElement = document.getElementById('textAreaCaracteres');
    let contadorElement = document.getElementById('contador');

    // Se inicializa el contador de caracteres al cargar la página
    mostrarCaracteres(textAreaElement, contadorElement);

    // Manejador del evento input sobre el textarea para llevar la cuenta de los caracteres
    textAreaElement.addEventListener('input', () => {
        mostrarCaracteres(textAreaElement, contadorElement);
    })

    // 3 b- Cambiar color de fondo al pasar el mouse
     // Se obtiene el div de la caja del DOM
    let cajaElement = document.getElementById('caja');

    // Se inicializa el color de fondo de la caja al cargar la página
    cajaElement.style.backgroundColor = 'lightgray';
    
    // Manejador del evento mouseover para cambiar el color de fondo al pasar el mouse  
    cajaElement.addEventListener('mouseover', () => {
        cajaElement.style.backgroundColor = 'blue';
    })

    // Manejador del evento mouseout para volver al color original al salir el mouse
    cajaElement.addEventListener('mouseout', () => {
        cajaElement.style.backgroundColor = 'lightgray';
    })

})

