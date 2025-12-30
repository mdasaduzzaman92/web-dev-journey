'use strict';
const scoreBoard = document.querySelector('.score');
const highScoreBoard = document.querySelector('.highscore');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
let highScore = 0;
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20, 1) + 1;
console.log(randomNumber);

//Dom Manipulation
checkButton.addEventListener('click', () => {
  if (guess.value > randomNumber) {
    console.log('Guessed number is high');
    score--;
    scoreBoard.textContent = score;
  } else if (guess.value < randomNumber) {
    console.log('Guessed number is low');
    score--;
    scoreBoard.textContent = score;
  } else {
    console.log('You guessed it right');
    checkButton.disabled = true;
    number.textContent = randomNumber;
    if (highScore < score) {
      highScore = score;
      highScoreBoard.textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  console.log('Game restart');
  randomNumber = Math.trunc(Math.random() * 20, 1) + 1;
  score = 20;
  scoreBoard.textContent = score;
  number.textContent = '?';
  guess.value = '';
  checkButton.disabled = false;
});
