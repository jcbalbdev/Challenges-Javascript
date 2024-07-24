/* 
* Escribe un programa que cuente el número de palabras en una cadena de texto.
*/

function cuentaPalabras(texto){
  let numeroPalabras = texto.split(' ').length;

  return(`el numero de palabras de "${texto}" es ${numeroPalabras}`);
}

let respuesta = cuentaPalabras("ten un bonito dia");
console.log(respuesta);