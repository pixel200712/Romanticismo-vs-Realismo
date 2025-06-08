let paginaActual = 0;
const paginas = document.querySelectorAll(".pagina");
const btnSiguiente = document.getElementById("btnSiguiente");

function mostrarPagina(index) {
  paginas.forEach((pagina, i) => {
    pagina.classList.remove("activa");
    pagina.classList.add("inactiva");
    if (i === index) {
      pagina.classList.add("activa");
      pagina.classList.remove("inactiva");
    }
  });

  // Cambiar texto del botón si estamos en la última página
  if (index === paginas.length - 1) {
    btnSiguiente.textContent = "Terminar";
  } else {
    btnSiguiente.textContent = "Siguiente";
  }
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina(paginaActual);
  } else {
    // Aquí podrías hacer algo cuando termine, por ejemplo:
    alert("¡Has llegado al final!");
    // o resetear la página
    // paginaActual = 0;
    // mostrarPagina(paginaActual);
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

// Asumiendo que tienes botones así:
btnSiguiente.addEventListener("click", siguientePagina);
document.getElementById("btnAnterior").addEventListener("click", anteriorPagina);
