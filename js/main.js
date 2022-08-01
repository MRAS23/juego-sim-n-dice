let secuenciaPC = [];

const colores = ["rojo", "azul", "verde", "amarillo"];

function obtenerColorAleatorio() {
  return secuenciaPC.push(colores[Math.round(Math.random() * 3)]);
}

function iniciarJuego() {
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
    iniciarJuego();
  }, 500);
};

let secuenciaJugador = [];

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
    reiniciarJuego();
  }

  return false;
}

function siguienteRonda() {
  contarRondas();
  obtenerColorAleatorio();
  reproducirSecuenciaPC();
  secuenciaJugador = [];
  contadorClicks = 0;
}

function reiniciarJuego() {
  ocultarTablero();
  mostrarBotonVolverJugar();
  actualizarMensajeRondas();
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
  for (let i = 0; i < colores.length; i++) {
    if (color === colores[i]) {
      reproducirSonido(color);
      $cuadrado[i].classList.add("cuadrado-activo");
      setTimeout(() => {
        $cuadrado[i].classList.remove("cuadrado-activo");
      }, 300);
    }
  }
}

function reproducirSecuenciaPC() {
  deshabilitarBotones();
  for (let i = 0; i < secuenciaPC.length; i++) {
    setTimeout(() => {
      activarCuadrado(secuenciaPC[i]);
    }, (i + 1) * 600);

    if (i === secuenciaPC.length - 1) {
      setTimeout(() => {
        habilitarBotones();
      }, (i + 1) * 600);
    }
  }
}

function contarRondas() {
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
  iniciarJuego();
  ocultarBotonVolverJugar();
};

function actualizarMensajeRondas() {
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

function reproducirSonido(color) {
  sonidos[color].currentTime = 0;
  sonidos[color].play();
}

for (let i = 0; i < $cuadrado.length; i++) {
  $cuadrado[i].addEventListener("click", () => reproducirSonido(colores[i]));
}

let $tablero = document.querySelector("#simon");
function deshabilitarBotones() {
  $tablero.id = "cuadrado-inactivo";
  /* for (let i = 0; i < $cuadrado.length; i++) {
    $cuadrado[i].id = "cuadrado-inactivo";
  } */
}

function habilitarBotones() {
  /* for (let i = 0; i < $cuadrado.length; i++) {
    $cuadrado[i].id = " ";
  } */
  $tablero.id = "simon";
}
