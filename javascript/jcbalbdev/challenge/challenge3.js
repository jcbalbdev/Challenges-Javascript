/* 
* Escribe un programa que se encargue de comprobar si un número es o no cuadrado perfecto.
*/

function esCuadradoPerfecto(numero){
  let raiz = Math.sqrt(numero);

  if(raiz === Math.floor(raiz)){
    return(`el numero ${numero}  es cuadrado perfecto`);
  }else{
    return(`el numero ${numero} no es cuadrado perfecto`);
  }

}

let respuesta = esCuadradoPerfecto(10);
console.log(respuesta);