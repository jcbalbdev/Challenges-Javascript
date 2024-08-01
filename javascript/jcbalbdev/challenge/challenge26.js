/* 
* Escribe un programa que reciba un array de números ([1,2,3]) y retorne una cadena con el formato "los números del array son 1, 2 y 3" .
*/

function formatoEnTexto(listaNumeros){
  let longitud = listaNumeros.length;

  if(longitud === 0){
    return "La lista está vacía";
  }

  if(longitud === 1){
    return `El único número de la lista es ${listaNumeros[0]}`
  }

  const [ultimoNumero,...resto] = [listaNumeros[longitud-1],...listaNumeros.slice(0,longitud-1)];

  let texto = `Los numeros de la lista son ${resto.join(', ')} y ${ultimoNumero}`;

  return texto;

}

let numeros = [1,2,3,5];
let resultado = formatoEnTexto(numeros);
console.log(resultado);

