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
let currentTotal = 0; // Current amount of cookies collected

// DOM ELEMENTS
const feedback = document.querySelector('#feedback-box'); // Shows user feedback according to what's happening
const cookieBtn = document.querySelector('#cookie-btn'); // The cookie that user can click
const showAmount = document.querySelector('#current-cookies'); // HTML element to show how many cookies user has

// FUNCTION THAT RUNS WHEN COOKIE IS CLICKED
cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    currentTotal++; // Adds a cookie each click
    currentTotal = currentTotal += cookieMultiplier; // Adds amount of cookies according to how many multiplies user has
    updateGame(); // Updates user UI with latest updates
}

// UPDATES USER UI WHEN CALLED
function updateGame(){
    checkAutoClick(); // Checks if upgrade can be bought
    checkMultiply(); // Checks if upgrade can be bought
    updateUI(); // Updates user UI with latest updates

}

// FEEDBACK
const cookiesLeft = document.querySelector('#cookies-left');
function updateUI(){
    showAmount.innerHTML = currentTotal.toString(); // Shows current amount of cookies collected
    cookiesLeft.innerHTML = (10000 - currentTotal) + ' COOKIES TO GO!'; // Shows amount of cookies left until goal is reached
}

