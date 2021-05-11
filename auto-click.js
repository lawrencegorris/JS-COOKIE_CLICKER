// SETUP AUTO-CLICK UPGRADE
setInterval(autoClickFunction, 1000);
let autoClickCount = 0;
let autoClickCost = 10;

const autoClickBtn = document.querySelector('#auto-click-btn');
autoClickBtn.addEventListener('click', buyAutoClick);

function buyAutoClick(){
    if(canBuyUpgrades === true){
        currentTotal = currentTotal - autoClickCost;
        updateGame();
        autoClickCount++;
        autoClickCost = autoClickCost * 2;
        canBuyUpgrades = false;
    }
    checkAutoClick();
}

function autoClickFunction(){
    currentTotal = currentTotal + autoClickCount;
    updateGame();
}

function checkAutoClick(){
    if(currentTotal >= autoClickCost){
        canBuyUpgrades = true;
        autoClickBtn.classList.remove('power-up-locked');
        autoClickBtn.classList.add('power-up-unlocked');
        autoClickBtn.innerHTML = "NEXT AUTO-CLICK AVAILABLE <br> PAY " + autoClickCost + " COOKIES TO UNLOCK";
    }else{
        autoClickBtn.classList.remove('power-up-unlocked');
        autoClickBtn.classList.add('power-up-locked');
        autoClickBtn.innerHTML = "NEXT AUTO-CLICK LOCKED, YOU NEED: <br>" + autoClickCost + " COOKIES";
    }
}