'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00ff11';
    document.querySelector('.number').style.width = '30rem';

    // Update high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Disable check button after win
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').textContent = secretNumber;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // When guess is too high or too low
      displayMessage(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );

      score--;
      document.querySelector('.score').textContent = score;

      // When player loses
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

// Again button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
