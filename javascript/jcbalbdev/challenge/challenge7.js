/* 
* Escribe un programa que diga si el caracter ingresado es una letra.
*/

function esLetra(caracter){
  const regExp = /^[a-zA-Z]$/;

  if(regExp.test(caracter)){
    return(`${caracter} es una letra`);
  }

  return(`${caracter} no es una letra`);
}

let resultado = esLetra("x");
console.log(resultado);