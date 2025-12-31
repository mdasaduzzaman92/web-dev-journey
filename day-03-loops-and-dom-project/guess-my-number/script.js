'use strict';
const scoreBoard = document.querySelector('.score');
const body = document.querySelector('body');
const highScoreBoard = document.querySelector('.highscore');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
let highScore = 0;
let score = 20;
let randomNumber = generateNumber();

//Dom Manipulation
checkButton.addEventListener('click', () => {
  if (score > 0) {
    if (guess.value > 0 && guess.value < 21) {
      if (guess.value > randomNumber) {
        message.textContent = 'Guessed number is high';
        score--;
        scoreBoard.textContent = score;
      } else if (guess.value < randomNumber) {
        message.textContent = 'Guessed number is low';
        score--;
        scoreBoard.textContent = score;
      } else {
        message.textContent = '🎉You guessed it right';
        checkButton.disabled = true;
        number.textContent = randomNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        if (highScore < score) {
          highScore = score;
          highScoreBoard.textContent = score;
        }
      }
    } else {
      message.textContent =
        'Number should be between 1 and 20. Please try again!';
    }
  } else {
    message.textContent = '💥Game Lost';
    checkButton.disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', resetGame);

function resetGame() {
  randomNumber = generateNumber();
  score = 20;
  scoreBoard.textContent = score;
  number.textContent = '?';
  guess.value = '';
  checkButton.disabled = false;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
}

function generateNumber() {
  const randomNumber = Math.trunc(Math.random() * 20, 1) + 1;
  console.log(randomNumber);
  return randomNumber;
}
