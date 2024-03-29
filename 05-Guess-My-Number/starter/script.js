'use strict';

let number = document.querySelector('.number');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let secretNumber = Math.floor(Math.random() * (21 - 1) + 1);

let count = 20;
let scoreRecord = 0;

console.log(secretNumber, 'first secret number');

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess < secretNumber) {
    message.textContent = 'Guess was too low!';
    count--;
    score.textContent = count;
  } else if (guess > secretNumber) {
    message.textContent = ' Guess was too high!';
    count--;
    score.textContent = count;
  } else {
    message.textContent = '🥳 You Got It!!!';
    count += 5;
    number.textContent = guess;
    score.textContent = count;
    if (count > scoreRecord) {
      scoreRecord = count;
      highScore.textContent = count;
      message.textContent = '🏅🏅You set a new high Score!!!!!!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  count = 20;
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * (21 - 1) + 1);
  console.log(secretNumber, 'new secret number');
});
