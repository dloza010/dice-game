'use strict';

// Selecting elements
const score0DOMElement = document.querySelector('#score--0');
const score1DOMElement = document.getElementById('score--1');
const diceDOMElement = document.querySelector('.dice');

score0DOMElement.textContent = 0;
score1DOMElement.textContent = 0;
diceDOMElement.classList.add('hidden');