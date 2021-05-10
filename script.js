// SETUP
let currentTotal = 0;

// MULTIPLY UPGRADE
let canBuyUpgrade = false;
let multiplierLevel = 0;


// DOM ELEMENTS
//const feedback = document.querySelector('#feedback-box');
const cookieBtn = document.querySelector('#cookie-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const showAmount = document.querySelector('#current-cookies');

// FUNCTION STACK
function updates(){
    showAmount.innerHTML = currentTotal.toString()
    cookieUpgrades();
    //checkMultiplyAvailability();
}

cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    increaseCookies();
    updates();
}

function increaseCookies(){
    if(currentTotal >= 20 && multiplierLevel === 0){
        canBuyUpgrade = true;
        console.log('Can buy upgrade 1');
    }else if(currentTotal >= 30 && multiplierLevel === 1){
        canBuyUpgrade = true;
        console.log('can buy upgrade 2');
    }else if(currentTotal >= 50 && multiplierLevel === 2){
        canBuyUpgrade = true;
        console.log('can buy upgrade 3');
    }
    else if(currentTotal >= 100 && multiplierLevel === 3){
        canBuyUpgrade = true;
        console.log('can buy upgrade 4');
    }
    else if(currentTotal >= 150 && multiplierLevel === 4){
        canBuyUpgrade = true;
        console.log('can buy upgrade 5');
    }
    checkUpgradeAvailability();
}

function checkUpgradeAvailability(){
    if(canBuyUpgrade === true){
        multiplyBtn.classList.remove('multiply-btn-unavailable');
        multiplyBtn.classList.add('multiply-btn-available');
    }else {
        multiplyBtn.classList.remove('multiply-btn-available');
        multiplyBtn.classList.add('multiply-btn-unavailable');
    }
}