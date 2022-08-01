let secuenciaPC = [];

const colores = ["rojo", "azul", "verde", "amarillo"];

function obtenerColorAleatorio() {
  return secuenciaPC.push(colores[Math.round(Math.random() * 3)]);
}

function iniciaJuego() {
  mostrarTablero();
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML = 0;
  obtenerColorAleatorio();
  reproducirSecuenciaPC();
  ocultarBotonJugar();
}

document.querySelector("#boton-comenzar").onclick = function (event) {
  event.preventDefault();

  setTimeout(() => {
    iniciaJuego();
  }, 500);
};

let secuenciaJugador = [];

/* $cuadradoRojo.addEventListener("click", () => manejarSecuenciaJugador(1));
$cuadradoAzul.addEventListener("click", () => manejarSecuenciaJugador(2));
$cuadradoVerde.addEventListener("click", () => manejarSecuenciaJugador(3));
$cuadradoAmarillo.addEventListener("click", () => manejarSecuenciaJugador(4)); */

let $cuadrado = document.querySelectorAll(".cuadrado");

for (let i = 0; i < $cuadrado.length; i++) {
  $cuadrado[i].addEventListener("click", () => manejarSecuenciaJugador(i));
}

let contadorClicks = 0;

function manejarSecuenciaJugador(color) {
  if (color === 0) {
    secuenciaJugador.push("rojo");
  } else if (color === 1) {
    secuenciaJugador.push("azul");
  } else if (color === 2) {
    secuenciaJugador.push("verde");
  } else if (color === 3) {
    secuenciaJugador.push("amarillo");
  }

  if (comparaColoresArray(secuenciaJugador[contadorClicks], secuenciaPC[contadorClicks])) {
    contadorClicks++;
    if (contadorClicks === secuenciaPC.length) {
      setTimeout(() => {
        siguienteRonda();
      }, 300);
    }
  } else {
    reiniciaJuego();
  }

  return false;
}

function siguienteRonda() {
  contadorRondas();
  obtenerColorAleatorio();
  reproducirSecuenciaPC();
  secuenciaJugador = [];
  contadorClicks = 0;
}

function reiniciaJuego() {
  ocultarTablero();
  mostrarBotonVolverJugar();
  actualizaMensajeRondas();
  contadorClicks = 0;
  ocultarTitulo();
}

function comparaColoresArray(color1, color2) {
  if (color1 === color2) {
    return true;
  } else {
    return false;
  }
}

function activarCuadrado(color) {
  for (let i = 0; i < $cuadrado.length; i++) {
    if (color === colores[i]) {
      reproduceSonido(color);
      $cuadrado[i].classList.add("cuadrado-activo");
      setTimeout(() => {
        $cuadrado[i].classList.remove("cuadrado-activo");
      }, 300);
    }
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

function mostrarTitulo() {
  document.querySelector("h1").className = " ";
}

function ocultarTitulo() {
  document.querySelector("h1").className = "oculto";
}

document.querySelector("#boton-volver-a-jugar").onclick = function (event) {
  event.preventDefault();

  mostrarTitulo();
  secuenciaJugador = [];
  secuenciaPC = [];
  iniciaJuego();
  ocultarBotonVolverJugar();
};

function actualizaMensajeRondas() {
  let cantidadRondas = document.querySelector(".rondas").innerHTML;
  let rondas = document.querySelector(".rondas");
  rondas.innerHTML = `Llegaste hasta la ronda #${cantidadRondas}!`;
}

let sonidos = {
  rojo: new Audio("sonidos/simonSound1.mp3"),
  azul: new Audio("sonidos/simonSound2.mp3"),
  verde: new Audio("sonidos/simonSound3.mp3"),
  amarillo: new Audio("sonidos/simonSound4.mp3"),
};

function reproduceSonido(color) {
  sonidos[color].currentTime = 0;
  sonidos[color].play();
}

for (let i = 0; i < $cuadrado.length; i++) {
  $cuadrado[i].addEventListener("click", () => reproduceSonido(colores[i]));
}
