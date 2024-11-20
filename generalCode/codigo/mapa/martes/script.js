const muñeco = document.getElementById("muñeco");
const obstaculos = document.querySelectorAll(".obstaculo"); // Selecciona todos los obstáculos

let muñecoX = 0;
let muñecoY = 100;
const stepSize = 10; // Cuántos píxeles se mueve por cada tecla

// Limites de movimiento permitidos
const limites = {
    izquierda: 0,
    derecha: 450,  // Ancho del área de juego (500px) menos el ancho del muñeco (50px)
    arriba: 0,
    abajo: 250,    // Alto del área de juego (300px) menos el alto del muñeco (50px)
};

// Detectar movimiento con teclas
document.addEventListener('keydown', (event) => {
    let nuevaPosX = muñecoX;
    let nuevaPosY = muñecoY;

    switch (event.key) {
        case 'ArrowUp':
            if (muñecoY > limites.arriba) nuevaPosY -= stepSize;
            break;
        case 'ArrowDown':
            if (muñecoY < limites.abajo) nuevaPosY += stepSize;
            break;
        case 'ArrowLeft':
            if (muñecoX > limites.izquierda) nuevaPosX -= stepSize;
            break;
        case 'ArrowRight':
            if (muñecoX < limites.derecha) nuevaPosX += stepSize;
            break;
    }


    // mirar
    // Mover el muñeco solo si no hay colisión con ninguno de los obstáculos
    if (!haChocadoConObstaculos(nuevaPosX, nuevaPosY)) {
        muñecoX = nuevaPosX;
        muñecoY = nuevaPosY;
    }

    moverMuñeco();
});

function moverMuñeco() {
    muñeco.style.left = muñecoX + 'px';
    muñeco.style.top = muñecoY + 'px';
}

function haChocadoConObstaculos(nuevaX, nuevaY) {
    const muñecoRect = {
        left: nuevaX+20 ,
        right: nuevaX + 50, // Ancho del muñeco
        top: nuevaY+20 ,
        bottom: nuevaY + 50 // Alto del muñeco
    };

    // Comprobar si choca con alguno de los obstáculos
    for (const obstaculo of obstaculos) {
        const obstaculoRect = obstaculo.getBoundingClientRect();
        console.log(obstaculoRect)

        // Si choca con un obstáculo, retorna true para bloquear el movimiento
        if (!(muñecoRect.right < obstaculoRect.left ||muñecoRect.left > obstaculoRect.right ||muñecoRect.bottom < obstaculoRect.top ||muñecoRect.top > obstaculoRect.bottom)) {
            return true;
        }
    }

    return false; // Si no choca con ninguno, permite el movimiento
}
