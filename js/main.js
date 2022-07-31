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

function iniciaJuego() {
  mostrarTablero();
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML = 0;
  generaSecuenciaPC();
  ocultarBotonJugar();
  console.log(secuenciaPC);
}

document.querySelector("#boton-comenzar").onclick = function (event) {
  setTimeout(() => {
    iniciaJuego();
  }, 500);

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

let contadorClicks = 0;

function generaSecuenciaJugador(color) {
  /*  for (let i = 0; i < secuenciaPC.length; i++) {
    if (comparaColoresArray(secuenciaJugador[i], secuenciaPC[i])) {
      contadorCoincidencias++;
    } else {
      reiniciaJuego();
    }
  } */

  if (color === 1) {
    secuenciaJugador.push("rojo");
  } else if (color === 2) {
    secuenciaJugador.push("azul");
  } else if (color === 3) {
    secuenciaJugador.push("verde");
  } else if (color === 4) {
    secuenciaJugador.push("amarillo");
  }

  if (comparaColoresArray(secuenciaJugador[contadorClicks], secuenciaPC[contadorClicks])) {
    contadorClicks++;
    if (contadorClicks === secuenciaPC.length) {
      siguienteRonda();
    }
  } else {
    reiniciaJuego();
  }

  //devuelveResultado();

  return false;
}

/* function devuelveResultado() {
  let contadorCoincidencias = 0;
  for (let i = 0; i < secuenciaPC.length; i++) {
    if (comparaColoresArray(secuenciaJugador[i], secuenciaPC[i])) {
      contadorCoincidencias++;
    } else {
      reiniciaJuego();
    }
  }
  if (contadorCoincidencias === secuenciaPC.length) {
    siguienteRonda();
  }
} */

function siguienteRonda() {
  console.log("Correcto!");
  contadorRondas();
  generaSecuenciaPC();
  secuenciaJugador = [];
  contadorClicks = 0;
}

function reiniciaJuego() {
  console.log("Incorrecto!"); //esto deberia reemplazarse por un cartel de error y boton volver a empezar
  ocultarTablero();
  mostrarBotonVolverJugar();
  actualizaMensajeRondas();
  contadorClicks = 0;
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

function mostrarBotonJugar() {
  document.querySelector("#boton-comenzar").className = "visible";
}

function ocultarBotonJugar() {
  document.querySelector("#boton-comenzar").className = "oculto";
}

function mostrarBotonVolverJugar() {
  document.querySelector("#boton-volver-a-jugar").className = "boton-neon";
}

function ocultarBotonVolverJugar() {
  document.querySelector("#boton-volver-a-jugar").className = "oculto";
}

function mostrarTablero() {
  document.querySelector("#simon").className = "visible";
}

function ocultarTablero() {
  document.querySelector("#simon").className = "oculto";
}

document.querySelector("#boton-volver-a-jugar").onclick = function (event) {
  secuenciaJugador = [];
  secuenciaPC = [];
  iniciaJuego();
  ocultarBotonVolverJugar();

  event.preventDefault();
};

function actualizaMensajeRondas() {
  let cantidadrondas = document.querySelector(".rondas").innerHTML;
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML = `Llegaste hasta la ronda #${cantidadrondas}!`;
}
