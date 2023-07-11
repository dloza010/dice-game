'use strict';

// DOM Elements
const score0DOMElement = document.querySelector('#score--0');
const score1DOMElement = document.getElementById('score--1');
const diceDOMElement = document.querySelector('.dice');
const btnRollDOMElement = document.querySelector('.btn--roll');
const current0DOMElement = document.getElementById('current--0');
const current1DOMElement = document.getElementById('current--1');

// Starting conditions
score0DOMElement.textContent = 0;
score1DOMElement.textContent = 0;
diceDOMElement.classList.add('hidden');

const scores = [0, 0];
let score = 0;
let activePlayer = 0;

// Functionality to display roll dice value with correct image
function rollDice(){
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
        activePlayer = activePlayer === 0 ? 1 : 0;
    }

    
}

// event listener for 'roll dice' button
btnRollDOMElement.addEventListener('click', rollDice);