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
var diceFace = document.querySelector('.dice');

newGame();

var playerOneName = document.getElementById('name-0');
var playerTwoName = document.getElementById('name-1');

// event handlers

document.querySelector('.btn-roll').addEventListener('click', function() {
    // for dice roll with a result between 1-6

    dice = Math.floor(Math.random() * 6) + 1;

    //display dice result
    diceFace.style.display = 'block';
    diceFace.src = `blah.jpg`//`images/dice-${dice}.png`;

    //update user interface based on rolldice button

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        nextPlayer();
    }
} );


// Hold button actions

document.querySelector('.btn-hold').addEventListener('click', function() {

    //add current score to user global score
    scores[activePlayer] += roundScore;

    //update UI showing users total score
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    //check if users total score is equal to 100
    if(scores[activePlayer] >= 100) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');

        //change name of player to winner 
        document.getElementById(`name-${activePlayer}`).textContent = 'Winner!!!';

        //remove active player to allow winner styling to be visible
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        
        // Hide dice 
        diceFace.style.display = 'none';

        //disable roll and hold buttons
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.btn-hold').disabled = true;

    } else {
        // Next Player
            nextPlayer();
    }

});

// New game button actions

document.querySelector('.btn-new').addEventListener('click', newGame);

// functions

function nextPlayer() {
        roundScore = 0;

        // remove active player when 1 is encountered
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');

        //conditional to change player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        //reset current holders to default 0
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        // add active class to change ui
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
}

function newGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // 0 for player 1, 1 for player 2

    // Default DOM styling

    diceFace.style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //default names
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player1';

    //default styling for player 1 to be active right away
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //default styling for player panels
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //allow roll and hold buttons to be enabled
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false; 
};

/* 
    To do list:
        - Make game responsive 
            ` add div around buttons (roll and hold) and reposition to work in both layouts.
            ` Test different layouts for mobile (maybe layer style with z index)
            ` add name changing
            ` Allow players to define what score to play up to
    
*/






