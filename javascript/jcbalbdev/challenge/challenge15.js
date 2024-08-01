/* 
* Escribe un programa que permita jugar piedra, papel o tijera con otro jugador e indique quien es el ganador.
*/

function Jugar(opcionJugador1,opcionJugador2){
  const opcionesValidas = ['piedra','papel','tijera'];

  if((!opcionesValidas.includes(opcionJugador1)) || (!opcionesValidas.includes(opcionJugador2))){
    return "Ingrese opciones válidas";
  }

  if(opcionJugador1===opcionJugador2){
    return "Empate";
  }

  const reglasDeJuego ={
    piedra:'tijera',
    papel:'piedra',
    tijera:'papel'
  }

  if(reglasDeJuego[opcionJugador1]===opcionJugador2){
    return "Gana Jugador 1";
  }else{
    return "Gana Jugador 2";
  }
}

let jugador1 = "piedra";
let jugador2 = "pico de diamante"
let respuesta = Jugar(jugador1,jugador2);
console.log(respuesta);