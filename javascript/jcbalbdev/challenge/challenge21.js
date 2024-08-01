/* 
* Escribe un programa que indique la suma de los digitos de un numero.
*/

function sumaDigitos(ingreseNum){
  let numero = ingreseNum.toString().split('');
  let suma = numero.reduce((acumulador,valorActual)=>{
      return acumulador + parseInt(valorActual);
    },0);
  return suma;
}

let numero = 11235813213455;
let respuesta = sumaDigitos(numero);
console.log(respuesta);