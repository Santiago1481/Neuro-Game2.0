let players = ['Jugador 1', 'Jugador 2', 'Jugador 3'];
let readyPlayers = 0;
let timer = 30;
let gameStarted = false;
const readyCountElement = document.getElementById('ready-count');
const playerListElement = document.getElementById('players-list');
const timerElement = document.getElementById('timer');
const readyButton = document.getElementById('ready-button');
const startButton = document.getElementById('start-game');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendMessageButton = document.getElementById('send-message');

// Mostrar jugadores
function renderPlayers() {
    playerListElement.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playerListElement.appendChild(li);
    });
}

// Contador de inicio automático
function startCountdown() {
    const countdown = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerElement.textContent = timer;
        } else {
            clearInterval(countdown);
            if (!gameStarted) {
                startGame();
            }
        }
    }, 1000);
}

// Marcar jugador como listo
readyButton.addEventListener('click', () => {
    readyPlayers++;
    readyCountElement.textContent = readyPlayers;

    if (readyPlayers === players.length) {
        startButton.style.display = 'block';
    }

    readyButton.disabled = true;
});

// Iniciar el juego
function startGame() {
    gameStarted = true;
    alert('¡El juego ha comenzado!');
}

// Iniciar el juego manualmente
startButton.addEventListener('click', () => {
    if (readyPlayers === players.length) {
        startGame();
    }
});

// Sistema de chat
sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const p = document.createElement('p');
        p.textContent = `Tú: ${message}`;
        chatBox.appendChild(p);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Inicializar lobby
window.onload = function() {
    renderPlayers();
    startCountdown();
};