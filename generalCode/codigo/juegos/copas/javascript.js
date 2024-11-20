const imagenes = [
    '../codigo/juegos/copas/img/img-copas (1).jpg/',
    'images/copa2.png',
    'images/copa3.png',
    'images/copa4.png',
    'images/copa5.png',
    // Agrega más imágenes según sea necesario
];

let secuencia = [];
let secuenciaUsuario = [];
let nivel = 0;
let copas = 3;  // Inicia con 3 copas

// Función para reproducir sonido (simulado)
function reproducirSonido(copa) {
    console.log("Copa " + copa + " ha sonado.");
}

// Función para iniciar el juego
function iniciarJuego() {
    nivel = 0;
    copas = 3;  // Reiniciar copas a 3 al inicio
    secuencia = [];
    secuenciaUsuario = [];
    generarCopas();  // Generar copas al inicio
    document.getElementById("mensaje").innerText = "";
    siguienteNivel();
}

// Generar la secuencia y reproducirla
function siguienteNivel() {
    nivel++;
    if (nivel > 1) {
        // Aumentar el número de copas en cada nivel
        copas++;
        agregarCopa();
    }
    secuencia.push(Math.floor(Math.random() * copas) + 1);
    reproducirSecuencia();
}

// Reproducir la secuencia
function reproducirSecuencia() {
    let iteracion = 0;
    const intervalo = setInterval(() => {
        reproducirSonido(secuencia[iteracion]);
        let copa = document.getElementById("copa" + secuencia[iteracion]);
        copa.classList.add('sonando'); // Añadir clase 'sonando'
        
        setTimeout(() => {
            copa.classList.remove('sonando'); // Quitar clase 'sonando'
        }, 500);
        
        iteracion++;
        if (iteracion >= secuencia.length) {
            clearInterval(intervalo);
        }
    }, 1000);
    secuenciaUsuario = [];
}

// Función para manejar cuando el usuario selecciona una copa
function seleccionarCopa(copa) {
    secuenciaUsuario.push(copa);
    reproducirSonido(copa);
    if (!verificarSecuencia()) {
        document.getElementById("mensaje").innerText = "Incorrecto, intenta de nuevo.";
        secuenciaUsuario = [];
        reproducirSecuencia();
    } else if (secuenciaUsuario.length === secuencia.length) {
        document.getElementById("mensaje").innerText = "¡Correcto! Pasas al siguiente nivel.";
        setTimeout(siguienteNivel, 1000);
    }
}

// Verificar si la secuencia del usuario es correcta
function verificarSecuencia() {
    for (let iteracion = 0; iteracion < secuenciaUsuario.length; iteracion++) {
        if (secuenciaUsuario[iteracion] !== secuencia[iteracion]) {
            return false;
        }
    }
    return true;
}

// Generar las copas en el DOM
function generarCopas() {
    const copasDiv = document.getElementById("copas");
    copasDiv.innerHTML = '';  // Limpiar copas existentes
    const copasAleatorias = obtenerCopasAleatorias(copas); // Obtener un conjunto aleatorio de copas

    for (let iteracion = 0; iteracion < copasAleatorias.length; iteracion++) {
        let copa = document.createElement("div");
        copa.className = "copa";
        copa.id = "copa" + (iteracion + 1); // Usando 'iteracion'
        copa.style.backgroundImage = `url('${copasAleatorias[iteracion]}')`; // Establecer la imagen de fondo
        copa.style.backgroundSize = 'cover'; // Ajustar la imagen al tamaño de la copa
        copa.onclick = () => seleccionarCopa(iteracion + 1);
        copasDiv.appendChild(copa);
    }
}

// Función para obtener copas aleatorias sin repetición
function obtenerCopasAleatorias(cantidad) {
    const copasUnicas = [];
    const indices = [];

    while (copasUnicas.length < cantidad) {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        if (!indices.includes(indiceAleatorio)) {
            indices.push(indiceAleatorio);
            copasUnicas.push(imagenes[indiceAleatorio]);
        }
    }
    return copasUnicas;
}

// Agregar una nueva copa al avanzar de nivel
function agregarCopa() {
    const copasDiv = document.getElementById("copas");
    let nuevaCopa = document.createElement("div");
    nuevaCopa.className = "copa";
    nuevaCopa.id = "copa" + copas;
    nuevaCopa.style.backgroundImage = `url('${imagenes[copas - 1]}')`; // Establecer imagen de la nueva copa
    nuevaCopa.style.backgroundSize = 'cover'; // Ajustar la imagen al tamaño de la copa
    nuevaCopa.onclick = () => seleccionarCopa(copas);
    copasDiv.appendChild(nuevaCopa);
}

