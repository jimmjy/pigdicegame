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


// DOM manipulation


document.querySelector('#current-' + activePlayer).textContent;


diceFace.style.display = 'none';

// event handlers

document.querySelector('.btn-roll').addEventListener('click', function() {
    // for dice roll with a result between 1-6

    dice = Math.floor(Math.random() * 6) + 1;

    //display dice result
    diceFace.style.display = 'block';
    diceFace.setAttribute('src', `dice-${dice}.png`);

} );

// functions








