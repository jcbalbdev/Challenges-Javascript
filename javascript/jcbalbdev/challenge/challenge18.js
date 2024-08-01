/* 
* Escribe un programa que diga si dos palabra son anagramas.
*/

function sonAnagramas(ingresePrimeraPalabra,ingreseSegundaPalabra){
  let primeraPalabra = ingresePrimeraPalabra.toLowerCase().split('').sort().join('');
  let segundaPalabra = ingreseSegundaPalabra.toLowerCase().split('').sort().join('');

  if(primeraPalabra===segundaPalabra){
    return 'Son anagramas';
  }else{
    return 'No son anagramas';
  }
}

let palabraUno = 'Riesgo';
let palabraDos = 'Sergio';

let respuesta = sonAnagramas(palabraUno,palabraDos);
console.log(respuesta);