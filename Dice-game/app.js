/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// LECTURE 48: Math + querySelector
var scores, roundScore, activePlayer, gamePlaying;

init(); // Intializer

// textContent VS innerHTML
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// Get DOM content
//var x = document.querySelector('#score-0').textContent;

// LECTURE 49, 50: Events and Event handling    
function btn() {
    // Function
}
btn(); // Callback function
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. RNG
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. Update the score IF rolled # was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next play
            nextPlayer();
        }
    }
}); // Anonymouse function

//LECTURE 51
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //scores[activePlayer] = scores[activePlayer] + roundScore // Same as ^
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won game
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
}); // Anonymouse Function

function nextPlayer() {
    // Go to the next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    /*if (activePlayer === 0) { // Same as Ternary ^
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }*/
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // Change DOM Class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    // Change DOM Style
    document.querySelector('.dice').style.display = 'none';
}

// LECTURE 52
// Initialization
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // Change DOM styling
    document.querySelector('.dice').style.display = 'none';
    // Change DOM content
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}















