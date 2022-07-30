function generaNumeroAleatorio() {
  let numeroAleatorio = Math.round(Math.random() * (4 - 1) + 1);

  return numeroAleatorio;
}

console.log(generaNumeroAleatorio());

let secuenciaPC = [];

function generaSecuenciaPC() {
  let nuevoElementoSecuenciaPC = generaNumeroAleatorio();

  if (nuevoElementoSecuenciaPC === 1) {
    secuenciaPC.push("rojo");
  } else if (nuevoElementoSecuenciaPC === 2) {
    secuenciaPC.push("azul");
  } else if (nuevoElementoSecuenciaPC === 3) {
    secuenciaPC.push("verde");
  } else if (nuevoElementoSecuenciaPC === 4) {
    secuenciaPC.push("amarillo");
  }
  reproducirSecuenciaPC();

  return secuenciaPC;
}

document.querySelector("#boton-comenzar").onclick = function (event) {
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML = 0;

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

  devuelveResultado();

  return false;
}

function devuelveResultado() {
  let contadorCoincidencias = 0;
  for (let i = 0; i < secuenciaPC.length; i++) {
    if (comparaColoresArray(secuenciaJugador[i], secuenciaPC[i])) {
      contadorCoincidencias++;
    }
  }
  if (contadorCoincidencias === secuenciaPC.length) {
    console.log("Correcto!");
    contadorRondas();

    generaSecuenciaPC();
    secuenciaJugador = [];
    //faltaria agregar un cartel que actualice en que ronda vas.
  } else {
    console.log("Incorrecto!"); //esto deberia reemplazarse por un cartel de error y boton volver a empezar
  }
}

function comparaColoresArray(color1, color2) {
  if (color1 === color2) {
    return true;
  } else {
    return false;
  }
}

function activarCuadrado(color) {
  if (color === "rojo") {
    $cuadradoRojo.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoRojo.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "azul") {
    $cuadradoAzul.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoAzul.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "verde") {
    $cuadradoVerde.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoVerde.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "amarillo") {
    $cuadradoAmarillo.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoAmarillo.classList.remove("cuadrado-activo");
    }, 300);
  }
}

function reproducirSecuenciaPC() {
  for (let i = 0; i < secuenciaPC.length; i++) {
    setTimeout(() => {
      activarCuadrado(secuenciaPC[i]);
    }, (i + 1) * 600);
  }
}

function contadorRondas() {
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML++;
}
