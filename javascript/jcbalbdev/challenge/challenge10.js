/* 
* Escribe un programa que elimine todos los caracteres que no sean letras ni espacios.
*/

function quitarSimbolos(texto){
  const entreLetras = /([a-zA-Z])[^a-zA-Z\s]+([a-zA-Z])/ ;
  const simbolos = /[^a-zA-Z\s]/g;

  let espacioEntreLetras = texto.replace(entreLetras,'$1 $2');
  let sinSimbolos = espacioEntreLetras.replace(simbolos,'');
  
  return sinSimbolos;
}

let resultado = quitarSimbolos("!!!hola mundo,ohhhh!!!");
console.log(resultado);