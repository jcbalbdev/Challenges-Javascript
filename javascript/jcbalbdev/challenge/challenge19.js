/* 
* Escribe un programa que diga si un numero es numero de Armstrong.
*/

function esNumArmstrong(ingreseNum){
  let digitos = ingreseNum.toString().split('');
  let cantidaddigitos = digitos.length;

  let suma = digitos.reduce((acumulador,digito)=>{
    return acumulador + Math.pow(digito,cantidaddigitos);
  },0);

  if(suma === ingreseNum){
    return `El numero ${ingreseNum} es un numero de Armstrong`;
  }else{
    return `El numero ${ingreseNum} no es un numero de Armstrong`;
  }

  

}

let numero = 153;
let respuesta = esNumArmstrong(numero);
console.log(respuesta);