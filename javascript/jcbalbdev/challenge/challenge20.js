/* 
* Escribe un programa que ordene una lista de numeros de forma ascendente o descendente segun se le indique.
*/

function Ordena(ingreseListaNumeros,enQueOrden){
  let orden = enQueOrden.toLowerCase();
  let ordenAscendente = ingreseListaNumeros.slice().sort((a,b)=> a-b);
  let ordenDescendente = ingreseListaNumeros.slice().sort((a,b)=> b-a );

  if(orden === 'ascendente'){
    return ordenAscendente;
  }else{
    return ordenDescendente;
  }
}

let numeros = [1,9,10,15,34,56,12,91,2,24]
let orden = 'descendente'
let respuesta = Ordena(numeros,orden);
console.log(respuesta);