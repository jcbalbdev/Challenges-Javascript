/* 
* Escribe un programa que invierta el orden de una cadena de texto.
*/

function invertir(texto){
  let palabraInvertirda = texto.split('').reverse('').join('');
  return(`la palabra invertida de ${texto} es ${palabraInvertirda}`);
}

let respuesta = invertir("Hello Hello Hello!!!");
console.log(respuesta);