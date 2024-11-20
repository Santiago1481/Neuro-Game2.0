let nivel = 1;
let numeroAleatorio;
const numeroMostrar = document.querySelector('.numero-aleatorio');
const mensaje = document.getElementById('mensaje');
const numeroIngresado = document.getElementById('numeroIngresado');
const validarBtn = document.getElementById('validarBtn');
const modalNumero = document.getElementById('modalNumero');

function generarNumero() {
    // Generar un número aleatorio con dígitos basados en el nivel
    const max = Math.pow(10, nivel) - 1; // 10^nivel - 1
    numeroAleatorio = Math.floor(Math.random() * max);
    
    // Asegurarse de que el número tiene la longitud adecuada
    const paddedNumber = String(numeroAleatorio).padStart(nivel, '0');
    numeroMostrar.textContent = paddedNumber;

    modalNumero.style.opacity = '1';  // Muestra el modal
    setTimeout(() => {
        modalNumero.style.opacity = '0';  // Oculta el modal después de unos segundos
    }, 3000);  // Cambia el tiempo si lo deseas
}

function validarNumero() {
    const ingreso = numeroIngresado.value;

    // Validar si el ingreso es correcto
    if (ingreso === String(numeroAleatorio)) {
        mensaje.textContent = "¡Correcto! Siguiente nivel.";
        mensaje.style.color = "green";
        nivel++;
        setTimeout(() => {
            numeroIngresado.value = "";  // Limpia el campo de entrada
            generarNumero();  // Genera un nuevo número para memorizar
        }, 2000);  // Tiempo de espera antes de mostrar el siguiente número
    } else {
        mensaje.textContent = "Incorrecto. Intenta de nuevo.";
        mensaje.style.color = "red";
    }
}

validarBtn.addEventListener('click', validarNumero);

// Iniciar el primer nivel
generarNumero();
