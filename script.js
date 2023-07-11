'use strict';

// DOM Elements
const score0DOMElement = document.querySelector('#score--0');
const score1DOMElement = document.getElementById('score--1');
const diceDOMElement = document.querySelector('.dice');
const btnRollDOMElement = document.querySelector('.btn--roll');
const btnHoldDOMElement = document.querySelector('.btn--hold');
const btnNewDOMElement = document.querySelector('.btn--new');
const current0DOMElement = document.getElementById('current--0');
const current1DOMElement = document.getElementById('current--1');
const player0DOMElement = document.querySelector('.player--0');
const player1DOMElement = document.querySelector('.player--1');

let scores, activePlayer, playing;


function newGame(){
    scores = [0, 0];

    current0DOMElement.textContent = 0;
    current1DOMElement.textContent = 0;
    score0DOMElement.textContent = 0;
    score1DOMElement.textContent = 0;

    activePlayer = 0;
    playing = true;
    diceDOMElement.classList.add('hidden');
};
newGame();

function switchPlayer(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0DOMElement.classList.toggle('player--active');
    player1DOMElement.classList.toggle('player--active');
}

function rollDice(){
    if(playing){
        // Generate a random dice roll
        let diceRollValue = Math.floor(Math.random() * 6) + 1;

        // Display dice
        diceDOMElement.classList.remove('hidden');
        diceDOMElement.src = `dice-${diceRollValue}.png`;

        // Check for rolled 1
        if(diceRollValue !== 1){
            scores[activePlayer] += diceRollValue;
            document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
        }
        // Switch to next player
        else{
            scores[activePlayer] = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
};

function holdScore(){
    if(playing){
        // if score greater than 20, player wins
        if(scores[activePlayer] >= 20){
            diceDOMElement.classList.add('hidden');
            playing = false;
            
        }
        // else switch player
        else{
            document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
            switchPlayer();
        }  
    }
};


// event listener for 'roll dice' button click
btnRollDOMElement.addEventListener('click', rollDice);

// event listerner for 'hold' button click
btnHoldDOMElement.addEventListener('click', holdScore);

// event listener for 'new game' button click
btnNewDOMElement.addEventListener('click', newGame);