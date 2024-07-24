/* 
* Escribe un programa que se encargue de comprobar si un número es o no primo.
*/

function esPrimo(numero){
  if(numero<2){
    return(`el numero ${numero} no es primo`)
  }

  for(let i = 2;i<=Math.sqrt(numero);i++){
    if(numero%i===0){
      return(`el numero ${numero} no es primo`);
    }
  }
  return(`el numero ${numero} es primo`);
}

let respuesta = esPrimo(49);
console.log(respuesta);

