// START GAME
let introScreen = document.querySelector('#intro-screen');
let gameScreen = document.querySelector('#game-screen');
let startGameBtn = document.querySelector('#start-game-btn');
startGameBtn.addEventListener('click', startGame);
function  startGame(){
    introScreen.classList.remove('show-screen');
    introScreen.classList.add('hide-screen');
    gameScreen.classList.remove('hide-screen');
}

// SETUP
let currentTotal = 0;

// DOM ELEMENTS
//const feedback = document.querySelector('#feedback-box');
const cookieBtn = document.querySelector('#cookie-btn');
const showAmount = document.querySelector('#current-cookies');

// GAME FUNCTIONS
cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    currentTotal++;
    currentTotal = currentTotal += cookieMultiplier;
    updateGame();
}

// RUN CHECKS FOR GAME
function updateGame(){
    checkAutoClick();
    checkMultiply();
    showAmount.innerHTML = currentTotal.toString();
    showCookiesUntilGoal();
}

// FEEDBACK
const cookiesLeft = document.querySelector('#cookies-left');
function showCookiesUntilGoal(){
    cookiesLeft.innerHTML = (10000 - currentTotal) + ' COOKIES TO GO!';
}

