// SETUP
let currentTotal = 0;
let isMultiplyBuyable = false;

// MULTIPLY COSTS
let noUpgrades = true;
let multiplyLvlOne = false;
let multiplyLvlTwo = false;
/*let multiplyLvlThree = false;
let multiplyLvlFour = false;
let multiplyLvlFive = false;*/

// DOM ELEMENTS
const feedback = document.querySelector('#feedback-box');
const cookieBtn = document.querySelector('#cookie-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
//const multiplyText = document.querySelector('#multiply-label');
const showAmount = document.querySelector('#current-cookies');

// FUNCTION STACK

function increaseCookies(){
    watchCookies();
    if (noUpgrades === true){
        currentTotal++
    }else if(multiplyLvlOne === true){
        currentTotal += 2;
    }else if(multiplyLvlTwo === true){
        currentTotal += 5;
    }
}

function updateBuyable(){
    if(isMultiplyBuyable === true){
        multiplyBtn.classList.remove('multiply-btn-unavailable');
        multiplyBtn.classList.add('multiply-btn-available');
    }else if (isMultiplyBuyable === false){
        multiplyBtn.classList.remove('multiply-btn-available');
        multiplyBtn.classList.add('multiply-btn-unavailable');
    }
}

cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    increaseCookies();
    updates();
    updateBuyable();
}

function updates(){
    showAmount.innerHTML = currentTotal;
}

function watchCookies(){
    if(currentTotal >= 19){
        multiplyBtn.innerHTML = 'BUY NOW: <br> 2 COOKIES EACH TIME';
        isMultiplyBuyable = true;
    }else if(multiplyLvlOne === true && multiplyLvlTwo === false){
        multiplyBtn.innerHTML = 'BUY NOW: <br> 2 COOKIES EACH TIME';
        isMultiplyBuyable = false;
    }
}

multiplyBtn.addEventListener('click', buyMultiply);
function buyMultiply(){
        if(currentTotal < 20){
            feedback.innerHTML = 'You can\'t buy that just yet';
        }else if (currentTotal >= 20) {
            isMultiplyBuyable = true;
            noUpgrades = false;
            multiplyLvlOne = true;
            currentTotal -= 20;
            feedback.innerHTML = 'You now get 2 cookies each time!'
            updates();
        }else if (currentTotal >= 150){
            noUpgrades = false;
            multiplyLvlTwo = true;
            currentTotal -= 150;
            feedback.innerHTML = 'You now get 5 cookies each time';
        }
}

