/* 
* Escribe un programa que despues de introducirle un texto que contenga letras y caracteres me devuelva el mismo texto pero con la primera letra en mayuscula y las demas letras en minusculas.
*por ejemplo : 
*si ingreso !!!heLLo!!! el programa deberia retornar !!!Hello!!!
*/
function letraMayus(texto){
  let caracteres = texto.split('');
  let primeraLetraEncontrada = false;
  
  for(let i=0;i<caracteres.length;i++){
    const caracter = caracteres[i];
    const regExp = /^[a-zA-Z]$/;
  
    if(regExp.test(caracter)){
      if(!primeraLetraEncontrada){
        caracteres[i]=caracter.toUpperCase();
        primeraLetraEncontrada = true;
      }else{
        caracteres[i]=caracter.toLowerCase();
      }
    }
  }
  
  return(`el texto "${texto}" se convierte en ${caracteres.join('')}`);
  
  }

let respuesta = letraMayus("¡¡¡holA, Buenas taRdes!!!");
console.log(respuesta);

