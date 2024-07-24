/* 
* Escribe un programa que convierta las primeras letras de cada palabra,en un texto ingresado, en mayúsculas
*/

function letrasMayus(texto){
  let palabras =  texto.split(' ');

  for(let i = 0;i<palabras.length;i++){
    palabras[i]= palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
  }

  return `las palabras del "${texto}" son "${palabras.join(' ')}"`
}

let respuesta = letrasMayus("lunes MArtes MierColes");
console.log(respuesta);