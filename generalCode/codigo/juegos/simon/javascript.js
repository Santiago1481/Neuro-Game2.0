let moves, totalMoves;
const sounds = {
    correct: new Audio('correct.mp3'),
    incorrect: new Audio('incorrect.mp3'),
    start: new Audio('start.mp3')
};

function iluminar(cellPos, time) {
    setTimeout(() => {
        const cell = document.querySelector('.cell[pos="' + cellPos + '"]');
        cell.classList.add('active');
        sounds.correct.play();  // Sonido al iluminar
        setTimeout(() => cell.classList.remove('active'), 400);
    }, time);
}

function movimientoActual(current) {
    moves.push(Math.floor(Math.random() * 4) + 1);
    if (current < totalMoves) {
        movimientoActual(++current);
    }
}

function iniciarJuego() {
    sounds.start.play();  // Sonido de inicio
    moves = [];
    totalMoves = 2;
    document.querySelector('#iniciar').style.display = 'none';
    document.querySelector('#mensaje').style.display = 'block';
    secuencia();
}

function secuencia() {
    moves = [];
    movimientoActual(1);
    document.querySelector('#mensaje').innerHTML = 'Simon says...';
    for (let i = 0; i < moves.length; i++) {
        iluminar(moves[i], 600 * i);
    }
    setTimeout(() => {
        document.querySelector('#mensaje').innerHTML = 'Repeat the sequence!';
    }, 600 * moves.length);
}

function hacerClick(click) {
    let cellPos = click.target.getAttribute('pos');
    iluminar(cellPos, 100);
    if (moves && moves.length) {
        if (moves[0] == cellPos) {
            moves.shift();
            if (!moves.length) {
                totalMoves++;
                secuencia();
            }
        } else {
            document.querySelector('#mensaje').innerHTML = 'GAME OVER';
            sounds.incorrect.play();  // Sonido de error
            setTimeout(() => {
                document.querySelector('#iniciar').style.display = 'block';
                document.querySelector('#mensaje').style.display = 'none';
            }, 1000);
        }
    }
}

document.querySelector('#iniciar').addEventListener('click', iniciarJuego);
let cells = Array.from(document.getElementsByClassName('cell'));
cells.forEach(cell => cell.addEventListener('click', hacerClick));
