/* 
* Escribe un programa que me diga si hay algun elemento de una lista que cumpla una condicion dada.
*/

function hayAlgun(elemento,condicion){
  let respuesta = elemento.some(condicion);

  if(respuesta===true){
    return 'si hay un elemento que cumple dicha condicion';
  }else{
    return 'no hay ningun elemento que cumpla dicha condicion';
  }

}

let tipo = (pokemon)=>pokemon.tipo==='agua';

let Pokemones = [{nombre:'pikachu',tipo:'electrico'},{nombre:'charmander',tipo:'fuego'},{nombre:'cyndaquil',tipo:'fuego'}];
let respuesta = hayAlgun(Pokemones,tipo);
console.log(respuesta);