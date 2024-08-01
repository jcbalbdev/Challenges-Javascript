/* 
* Escribe un programa que diga los numeros pares dentro de un intervalo ingresado .
*/

function numerosPares(inicio,final){
  let numerosPares = [];

  if(inicio%2!==0){
    inicio++;
  }

  for(let i= inicio;i<=final;i+=2){

      numerosPares.push(i);

  }

  return numerosPares;
}

let resultado = numerosPares(-5,5);
console.log(resultado);