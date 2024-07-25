/* 
* Escribe un programa que barajee el contenido de un array de cartas.
*/

function barajear(cartas){
  for(let i =  cartas.lenght-1;i>0;i--){
  let j = Math.floor(Math.random()*(i+1));

  [cartas[i],cartas[j]]=[cartas[j],cartas[i]];
  }
  return cartas;
}

let listaDeCartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let respuesta = barajear(listaDeCartas);
console.log(respuesta);