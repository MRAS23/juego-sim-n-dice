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
  event.preventDefault();

  setTimeout(() => {
    iniciaJuego();
  }, 500);
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
  console.log("Correcto!");
  contadorRondas();
  generaSecuenciaPC();
  secuenciaJugador = [];
  contadorClicks = 0;
}

function reiniciaJuego() {
  console.log("Incorrecto!");
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
  if (color === "rojo") {
    reproduceSonido(color);
    $cuadradoRojo.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoRojo.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "azul") {
    reproduceSonido(color);
    $cuadradoAzul.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoAzul.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "verde") {
    reproduceSonido(color);
    $cuadradoVerde.classList.add("cuadrado-activo");
    setTimeout(() => {
      $cuadradoVerde.classList.remove("cuadrado-activo");
    }, 300);
  }
  if (color === "amarillo") {
    reproduceSonido(color);
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

var sonidos = {
  rojo: new Audio("sonidos/simonSound1.mp3"),
  azul: new Audio("sonidos/simonSound2.mp3"),
  verde: new Audio("sonidos/simonSound3.mp3"),
  amarillo: new Audio("sonidos/simonSound4.mp3"),
  error: new Audio(),
};

function reproduceSonido(color) {
  sonidos[color].currentTime = 0;
  sonidos[color].play();
}

$cuadradoRojo.addEventListener("click", () => reproduceSonido($cuadradoRojo.id));
$cuadradoAzul.addEventListener("click", () => reproduceSonido($cuadradoAzul.id));
$cuadradoVerde.addEventListener("click", () => reproduceSonido($cuadradoVerde.id));
$cuadradoAmarillo.addEventListener("click", () => reproduceSonido($cuadradoAmarillo.id));
