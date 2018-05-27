/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variables

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 for player 1, 1 for player 2

var diceFace = document.querySelector('.dice');
var playerOneName = document.getElementById('name-0');
var playerTwoName = document.getElementById('name-1');


// Default DOM styling

diceFace.style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


// event handlers

document.querySelector('.btn-roll').addEventListener('click', function() {
    // for dice roll with a result between 1-6

    dice = Math.floor(Math.random() * 6) + 1;

    //display dice result
    diceFace.style.display = 'block';
    diceFace.setAttribute('src', `../images/dice-${dice}.png`);

    //update user interface based on rolldice button

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        roundScore = 0;
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');


        //conditional to change player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        //reset current holders to default 0
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        // add active class to change ui
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');

        //hide dice again to give user feedback
        diceFace.style.display = 'none';
    }
} );


// functions








