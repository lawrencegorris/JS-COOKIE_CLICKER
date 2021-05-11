// SETUP
let currentTotal = 0;

// MULTIPLY UPGRADE
let canBuyUpgrade = false;



// DOM ELEMENTS
const feedback = document.querySelector('#feedback-box');
const cookieBtn = document.querySelector('#cookie-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const showAmount = document.querySelector('#current-cookies');

// FUNCTION STACK
function updates(){
    showAmount.innerHTML = currentTotal.toString();

}

cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    cookieUpgrades();
    increaseCookies();
    updates();
}

function increaseCookies(){
    if(currentTotal >= 20 && multiplierLevel === 0){
        canBuyUpgrade = true;
        multiplyBtn.innerHTML = "BUY UPGRADE: <br> 2 COOKIES EACH CLICK";
        autoClickBtn.innerHTML = "BUY UPGRADE: <br> 1 COOKIE EACH SECOND";
        console.log('Can buy upgrade 1');
    }else if(currentTotal >= 30 && multiplierLevel === 1){
        canBuyUpgrade = true;
        multiplyBtn.innerHTML = "BUY UPGRADE: <br> 5 COOKIES EACH CLICK";
        console.log('can buy upgrade 2');
    }else if(currentTotal >= 50 && multiplierLevel === 2){
        canBuyUpgrade = true;
        multiplyBtn.innerHTML = "BUY UPGRADE: <br> 10 COOKIES EACH CLICK";
        console.log('can buy upgrade 3');
    }
    else if(currentTotal >= 100 && multiplierLevel === 3){
        canBuyUpgrade = true;
        multiplyBtn.innerHTML = "BUY UPGRADE: <br> 15 COOKIES EACH CLICK";
        console.log('can buy upgrade 4');
    }
    else if(currentTotal >= 150 && multiplierLevel === 4){
        canBuyUpgrade = true;
        multiplyBtn.innerHTML = "BUY UPGRADE: <br> 25 COOKIES EACH CLICK";
        console.log('can buy upgrade 5');
    }
    checkUpgradeAvailability();
}

function checkUpgradeAvailability(){
    if(canBuyUpgrade === true){
        multiplyBtn.classList.remove('power-up-locked');
        multiplyBtn.classList.add('power-up-unlocked');
        autoClickBtn.classList.remove('power-up-locked');
        autoClickBtn.classList.add('power-up-unlocked');
    }else {
        multiplyBtn.classList.remove('power-up-unlocked');
        multiplyBtn.classList.add('power-up-locked');
        autoClickBtn.classList.remove('power-up-unlocked');
        autoClickBtn.classList.add('power-up-locked');
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
        autoClickBtn.innerHTML = "NEXT AUTO-CLICK LOCKED";
    }
}