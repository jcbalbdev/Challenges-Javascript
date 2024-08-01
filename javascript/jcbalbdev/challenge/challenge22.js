/* 
* Escribe un programa que sume los numeros de una lista.
*/

function sumaDeNumeros(ingreseLista){
  let suma = ingreseLista.reduce((acumulador,valorActual)=>{
    return acumulador + valorActual;
  },0);

  return suma;
}

let numeros = [1,2,3,4,5,6,7,8,9,-9,-8,-7,-11,-1,-3];
let respuesta = sumaDeNumeros(numeros);
console.log(respuesta);