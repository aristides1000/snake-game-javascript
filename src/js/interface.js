/* eslint-disable no-undef */

import _ from 'lodash';

const playButton = document.getElementById('playButton');
const continueButton = document.getElementById('continueButton');
const restartButton = document.getElementById('restartButton');

const openingGame = document.getElementById('openingGame');
const gameOver = document.getElementById('gameOver');
const pauseGame = document.getElementById('pauseGame');
const canvasDisplay = document.getElementById('canvasDisplay');

let gameState = 'opening';

function restoreScore() {
  document.getElementById('mainScoreGame').textContent = s.score;
}

playButton.addEventListener('click', () => {
  openingGame.classList.add('d-none');
  canvasDisplay.classList.remove('d-none');
  gameState = 'play';
  s.restart();
  restoreScore();
  if (s.highScore === 0) {
    s.highScore = 0;
  }
  document.getElementById('mainHighScoreGame').textContent = s.highScore;
});

restartButton.addEventListener('click', () => {
  gameOver.classList.add('d-none');
  canvasDisplay.classList.remove('d-none');
  document.getElementById('mainScoreGame').textContent = s.score;
  document.getElementById('mainHighScoreGame').textContent = s.highScore;
  s.restart();
  restoreScore();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && gameState === 'play') {
    canvasDisplay.classList.add('d-none');
    pauseGame.classList.remove('d-none');
    document.getElementById('pauseScore').textContent = s.score;
    document.getElementById('pauseHighScore').textContent = s.highScore;
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
