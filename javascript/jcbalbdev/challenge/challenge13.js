/* 
* Escribe un programa que me muestre todos los elementos de una lista que cumplan una condicion dada
*/
function filtraPorTipo(listaPokemones,insertaTipo){
  let pokemonesDeTipo = listaPokemones.filter(insertaTipo);

  return pokemonesDeTipo;
}

let tipo = (pokemon)=>pokemon.tipo==='fuego';

let Pokemones = [{nombre:'pikachu',tipo:'electrico'},{nombre:'charmander',tipo:'fuego'},{nombre:'cyndaquil',tipo:'fuego'}];
let respuesta = filtraPorTipo(Pokemones,tipo);
console.log(respuesta);