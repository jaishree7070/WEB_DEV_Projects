'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️Invalid Number!');
    document.querySelector('body').style.backgroundColor = '#d37676';
    score = score - 2;
    document.querySelector('.score').textContent = score;
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (guess > 20) {
      displayMessage('⛔️Invalid Number!');
      document.querySelector('body').style.backgroundColor = '#d37676';
      score = score - 2;
      document.querySelector('.score').textContent = score;
    }
    else if ((guess < 21) && (guess > 0)) {
      document.querySelector('body').style.backgroundColor = '#222';
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(212, 42, 42)';
        document.querySelector('.score').textContent = 0;
      }
    }
    else{
      displayMessage('⛔️Invalid Number!');
      document.querySelector('body').style.backgroundColor = '#d37676';
      score = score - 2;
      document.querySelector('.score').textContent = score;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
