// script.js

let paginaActual = 0;
const paginas = document.querySelectorAll(".pagina");

function mostrarPagina(index) {
  paginas.forEach((pagina, i) => {
    pagina.classList.remove("activa");
    pagina.classList.add("inactiva");
    if (i === index) {
      pagina.classList.add("activa");
      pagina.classList.remove("inactiva");
    }
  });
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
}

function anteriorPagina() {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
}

// Inicial
mostrarPagina(paginaActual);
