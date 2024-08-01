/* 
* Escribe un programa que diga el promedio de notas de un alumno.
*/

function promedioNotas(ingreseAlumno){
  let notas = ingreseAlumno.notas;
  let cantidadDeNotas = ingreseAlumno.notas.length;

  let sumaDeNotas = notas.reduce((acumulador,valorInicial)=>{
    return acumulador + valorInicial
  },0);


  return `el promedio de notas de ${ingreseAlumno.nombre} es ${sumaDeNotas/cantidadDeNotas}`


}

let alunmno = {
  nombre: "Juan",
  notas: [10, 20, 18, 13, 13]
}
let respuesta = promedioNotas(alunmno);
console.log(respuesta);