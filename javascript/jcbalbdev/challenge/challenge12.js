/* 
* Escribe un programa que asigne estudiantes a grupos de manera aleatoria.
*/

function mezclaAleatoria(listaEstudiantes){
  for(let i = listaEstudiantes.length - 1;i>0;i--){
    let j = Math.floor(Math.random() * (i + 1));

    [listaEstudiantes[i],listaEstudiantes[j]]=[listaEstudiantes[j],listaEstudiantes[i]];
  }
  return listaEstudiantes;
}

function asignarGrupos(estudiantes,numGrupos){
  const estudiantesMezclados = mezclaAleatoria(estudiantes.slice());
  const grupos = [];

  for(let i = 0;i<numGrupos;i++){
    grupos[i]=[];
  }

  for(let i=0;i<estudiantesMezclados.length;i++){
    grupos[i%numGrupos].push(estudiantesMezclados[i]);
  }

  return grupos;
}

let misEstudiantes = [{estudiante:'Bruce Wayne',id:1},{estudiante:'Barry Allen',id:2},{estudiante:'Constatine',id:3},{estudiante:'Marty Mc Fly',id:4},{estudiante:'Homero',id:5},{estudiante:'Satoru',id:6},{estudiante:'Muzan',id:7},{estudiante:'Dr Strange',id:8},{estudiante:'Eleven',id:9},{estudiante:'Henry Cavil',id:10},{estudiante:'Margot Robie',id:11},{estudiante:'Fredy',id:12},{estudiante:'Tú',id:13}];
let respuesta = asignarGrupos(misEstudiantes,3);
console.log(respuesta);


