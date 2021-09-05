/* eslint-disable linebreak-style */

const playButton = document.getElementById('playButton');
const continueButton = document.getElementById('continueButton');
const restartButton = document.getElementById('restartButton');

const openingGame = document.getElementById('openingGame');
const gameOver = document.getElementById('gameOver');
const pauseGame = document.getElementById('pauseGame');
const canvasDisplay = document.getElementById('canvasDisplay');

let gameState = 'opening';
console.log(gameState);

playButton.addEventListener('click', () => {
  openingGame.classList.add('d-none');
  canvasDisplay.classList.remove('d-none');
  gameState = 'play';
  console.log(gameState);
  s.restart();
});

restartButton.addEventListener('click', () => {
  gameOver.classList.add('d-none');
  canvasDisplay.classList.remove('d-none');
  s.restart();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && gameState === 'play') {
    canvasDisplay.classList.add('d-none');
    pauseGame.classList.remove('d-none');
    gameState = 'pause';
  }

  if (e.key === 'Enter' && gameState === 'pause') {
    pauseGame.classList.add('d-none');
    canvasDisplay.classList.remove('d-none');
    gameState = 'play';
  }
});

continueButton.addEventListener('click', () => {
  pauseGame.classList.add('d-none');
  canvasDisplay.classList.remove('d-none');
  gameState = 'play';
});
