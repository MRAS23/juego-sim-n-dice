function generaNumeroAleatorio() {
  let numeroAleatorio = Math.round(Math.random() * (4 - 1) + 1);

  return numeroAleatorio;
}

console.log(generaNumeroAleatorio());

let secuencia = [];

function reproduceSecuenciaPC() {
  let nuevoElementoSecuencia = generaNumeroAleatorio();

  /* secuencia.push(nuevoElementoSecuencia);
  1:rojo 2:azul 3:verde 4:amarillo */

  if (nuevoElementoSecuencia === 1) {
    secuencia.push("rojo");
  } else if (nuevoElementoSecuencia === 2) {
    secuencia.push("azul");
  } else if (nuevoElementoSecuencia === 3) {
    secuencia.push("verde");
  } else if (nuevoElementoSecuencia === 4) {
    secuencia.push("amarillo");
  }

  return secuencia;
}

document.querySelector("#boton-comenzar").onclick = function (event) {
  reproduceSecuenciaPC();
  console.log(secuencia);

  event.preventDefault();
};
