let diapositivaActual = 0;

function cambiarDiapositiva(direccion) {
  const diapositivas = document.querySelectorAll('.diapositiva');
  diapositivaActual = (diapositivaActual + direccion + diapositivas.length) % diapositivas.length;

  document.querySelector('.slider').style.transform = `translateX(-${diapositivaActual * 100}%)`;
  
  // Remover y agregar clase de borde brillante
  diapositivas.forEach(diapositiva => diapositiva.classList.remove('borde-brillante'));
  diapositivas[diapositivaActual].classList.add('borde-brillante');
}

function irAPagina() {
  const enlaces = ['../juegos/simon/index.html', '../juegos/numeros/index.html', '../juegos/copas/index.html'];
  window.location.href = enlaces[diapositivaActual];
}

