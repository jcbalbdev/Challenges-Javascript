/* 
* Escribe un programa que se encargue de comprobar si un número es o no perfecto.
*/
function esPerfecto(numero){
  let suma = 0;
  for(let i=1;i<numero;i++){
    if(numero%i===0){
      suma += i;
    }
  }
  
  if(suma===numero){
    return(`el numero ${numero} es perfecto`);
  }else{
    return(`el numero ${numero} no es perfecto`);
  }
}

let respuesta = esPerfecto(8128);
console.log(respuesta);