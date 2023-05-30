'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnRollDice = document.querySelector('.btn--roll');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
// let activePlayer = 0;
// const scores = [0, 0];
// let currentScore = 0;
// let playing = true;
let activePlayer, scores, currentScore, playing;
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
const btnHold = document.querySelector('.btn--hold');
const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  playing = true;
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

btnNewGame.addEventListener('click', init);
btnRollDice.addEventListener('click', function () {
  if (playing) {
    const generateRandomNumber = function () {
      return Math.trunc(Math.random() * 6) + 1;
    };
    dice.classList.remove('hidden');
    const randomNumber = generateRandomNumber();
    dice.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
