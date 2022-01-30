/**
 * Declare constants for DOM Elements 
 * and possible choices
 */

const yourMove = document.getElementById('your-move');
const computersMove = document.getElementById('computers-move');
const results = document.getElementById('results');
const choiceOptions = document.querySelectorAll('button');
let playerChoice;
let computersChoice;
let result;

/**
 * Add event listener to all buttons
 */

choiceOptions.forEach(choiceOptions => choiceOptions.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    yourMove.innerHTML = playerChoice;
    generateComputersChoice();
    getResult();
}));

/**
 * Game function for computer generated choice 
 * Accepts one parameter, which is the data-choice value
 * of the selected button
 */

function generateComputersChoice() {
    const randomChoiceNumber = Math.floor(Math.random() * choiceOptions.length);
    
    if (randomChoiceNumber === 1) {
        computersChoice = 'rock';
    }
    if (randomChoiceNumber === 2) {
        computersChoice = 'scissors';
    }
    if (randomChoiceNumber === 3) {
        computersChoice = 'paper';
    }
    computersMove.innerHTML = computersChoice;
}

/**
 * Game function for Results
 * Checks who the winner is
 */

function getResult() {
    if (computersChoice === playerChoice) {
        result = 'Its a draw';
    }
    if (computersChoice === 'rock' && playerChoice === "paper") {
        result = 'You are the winner!';
    }
    if (computersChoice === 'rock' && playerChoice === "scissors") {
        result = 'You lost, better luck next time!';
    }
    if (computersChoice === 'paper' && playerChoice === "scissors") {
        result = 'You are the winnder!';
    }
    if (computersChoice === 'rock' && playerChoice === "rock") {
        result = 'You lost, better luck next time!';
    }
    if (computersChoice === 'scissors' && playerChoice === "rock") {
        result = 'You are the winnder!';
    }
    if (computersChoice === 'scissors' && playerChoice === "paper") {
        result = 'You lost, better luck next time!';
    }
    results.innerHTML = result;
}


