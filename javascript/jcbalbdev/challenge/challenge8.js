/* 
* Escribe un programa que encuentre la primera letra en una cadena de caracteres.
*/

function encuentraCaracter(texto){
  let caracteres = texto.split('');
  const regExp = /^[a-zA-Z]$/;

  let letras = caracteres.filter((caracter)=>{
    return regExp.test(caracter);
  });

  return letras[0];
}

let respuesta = encuentraCaracter("¡¡¡¡Holis!!!!");
console.log(respuesta);
