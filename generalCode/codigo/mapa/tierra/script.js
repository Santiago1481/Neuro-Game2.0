const muñeco = document.getElementById('muñeco');
const letra = document.querySelector('.letra');
let position = { x: 0, y: 0 };  // Posición inicial en porcentaje
let valor = '';

const obstaculos = document.querySelectorAll('.ostaculos');  // Todos los obstáculos

// Definimos los límites (ajusta según sea necesario)
const LIMIT_X = 930; // Límite derecho (100% de ancho)
const LIMIT_Y = 760; // Límite inferior (100% de alto)
const muñecoRadio = 20; // Radio del muñeco para la colisión circular

document.addEventListener('keydown', (event) => {
    let newPos = { ...position };  // Guardamos la posición para ver si hay colisión antes de actualizar

    switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
            valor = 'rotateX(0deg)';
            newPos.y = Math.max(newPos.y - 10, 0); // Evita salir del límite superior
            letra.textContent = "W";
            break;
        case 's':
        case 'arrowdown':
            valor = 'rotateX(0deg)';
            newPos.y = Math.min(newPos.y + 10, LIMIT_Y); // Evita salir del límite inferior
            letra.textContent = "S";
            break;
        case 'a':
        case 'arrowleft':
            valor = 'rotateY(180deg)';
            newPos.x = Math.max(newPos.x - 8, 0); // Evita salir del límite izquierdo
            letra.textContent = "A";
            break;
        case 'd':
        case 'arrowright':
            valor = 'rotateY(0deg)';
            newPos.x = Math.min(newPos.x + 8, LIMIT_X); // Evita salir del límite derecho
            letra.textContent = "D";
            break;
    }

    // Verificar colisiones con los obstáculos antes de actualizar la posición
    if (!detectaColision(newPos.x, newPos.y, muñecoRadio)) {
        position = newPos;  // Actualizamos la posición solo si no hay colisión
    }

    muñeco.style.transform = `translate(${position.x}%, ${position.y}%) ${valor}`;
});

// Función para detectar colisión circular con obstáculos
function detectaColision(x, y, radio) {
    for (let obstaculo of obstaculos) {
        const obstaculoRect = obstaculo.getBoundingClientRect();  // Obtener la posición del obstáculo
        const obstaculoCentroX = obstaculoRect.left + obstaculoRect.width / 2;
        const obstaculoCentroY = obstaculoRect.top + obstaculoRect.height / 2;

        const distanciaX = (x / 100) * window.innerWidth - obstaculoCentroX;
        const distanciaY = (y / 100) * window.innerHeight - obstaculoCentroY;
        const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

        // Si la distancia es menor que la suma de los radios (considerando el tamaño del muñeco)
        if (distancia < radio + obstaculoRect.width / 2) {
            return true;  // Hay colisión
        }
    }
    return false;  // No hay colisión
}

// Función para iniciar el contador de tiempo
const contaidor_tiempo = document.querySelector('.contador');
const num = document.querySelector('.valor');
let minutos = 0;

function mostrar() {
    let segundo = 59;
    function contador() {
        if (segundo > 0) {
            if (minutos == 0 && segundo <= 3) {
                contaidor_tiempo.classList.add('cambio_color');
            }
            num.textContent = `${minutos}:${segundo}`;
            segundo--;
            setTimeout(contador, 1000);
        } else {
            if (minutos > 0) {
                minutos--;
                mostrar();
            } else {
                num.textContent = `${minutos}:${segundo}`;
                setTimeout(function () {
                    alert('Tiempo terminado');
                }, 1000);
            }
        }
    }
    contador();
}

mostrar();
