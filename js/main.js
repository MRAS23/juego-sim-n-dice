function generaNumeroAleatorio() {
  let numeroAleatorio = Math.round(Math.random() * (4 - 1) + 1);

  return numeroAleatorio;
}

console.log(generaNumeroAleatorio());

let secuenciaPC = [];

function generaSecuenciaPC() {
  let nuevoElementoSecuenciaPC = generaNumeroAleatorio();

  /* secuencia.push(nuevoElementoSecuencia);
  1:rojo 2:azul 3:verde 4:amarillo */

  if (nuevoElementoSecuenciaPC === 1) {
    secuenciaPC.push("rojo");
  } else if (nuevoElementoSecuenciaPC === 2) {
    secuenciaPC.push("azul");
  } else if (nuevoElementoSecuenciaPC === 3) {
    secuenciaPC.push("verde");
  } else if (nuevoElementoSecuenciaPC === 4) {
    secuenciaPC.push("amarillo");
  }

  return secuenciaPC;
}

document.querySelector("#boton-comenzar").onclick = function (event) {
  generaSecuenciaPC();
  console.log(secuenciaPC);

  event.preventDefault();
};

let secuenciaJugador = [];

let $cuadradoRojo = document.querySelector(".rojo");
let $cuadradoAzul = document.querySelector(".azul");
let $cuadradoVerde = document.querySelector(".verde");
let $cuadradoAmarillo = document.querySelector(".amarillo");
$cuadradoRojo.addEventListener("click", () => generaSecuenciaJugador(1));
$cuadradoAzul.addEventListener("click", () => generaSecuenciaJugador(2));
$cuadradoVerde.addEventListener("click", () => generaSecuenciaJugador(3));
$cuadradoAmarillo.addEventListener("click", () => generaSecuenciaJugador(4));

function generaSecuenciaJugador(color) {
  if (color === 1) {
    secuenciaJugador.push("rojo");
  } else if (color === 2) {
    secuenciaJugador.push("azul");
  } else if (color === 3) {
    secuenciaJugador.push("verde");
  } else if (color === 4) {
    secuenciaJugador.push("amarillo");
  }

  return false;
}

/* $cuadradoRojo.addEventListener("click", () => clickeado(1));
function clickeado(color) {
  if (color === 1) {
    secuenciaJugador.push("rojo");
  }
} */
