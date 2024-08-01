/* 
* Escribe un programa que diga si una palabra es un palindromo.
*/
function esPalindromo(ingresePalabra) {
  let palabra = ingresePalabra.toLowerCase();
  let palabraInvertida = palabra.split('').reverse().join('');
  
  if(palabra === palabraInvertida){
    return 'Es un palindromo';
  }else{
    return 'No es un palindromo';
  }

}

let palabra = 'Reconocer';
let respuesta = esPalindromo(palabra);
console.log(respuesta);