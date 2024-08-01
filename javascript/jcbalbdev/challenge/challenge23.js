/* 
* Escribe un programa que encuentre el numero maximo en una lista de numeros.
*/

function numeroMax(ingreseLista){
  let maximo = ingreseLista.reduce((acumulador,valorActual)=>{
    return Math.max(acumulador,valorActual);
  },-Infinity);

  return maximo;
}

let numeros = [1,2,3,4,5,6,7,8,9,-9,-8,-7,-11,-1,-3,100];
let respuesta = numeroMax(numeros);
console.log(respuesta);


