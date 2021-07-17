// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number...';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number ‼';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? '📉 Too Low...' : '📈 Too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Loose...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// } else if (guess < secretNumber) {
//   document.querySelector('.message').textContent = '📉 Too Low...';
//   score--;
//   document.querySelector('.score').textContent = score;
// }
// } else {
//   document.querySelector('.message').textContent = '💥 You Loose...';
//   document.querySelector('.score').textContent = 0;
// }

document.querySelector('.again').addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '⌚ Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
