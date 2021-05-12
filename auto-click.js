// SETUP AUTO-CLICK UPGRADES
setInterval(autoClickFunction, 1000); // Sets up interval timer of one second
let canBuyAutoClick = false; // Sets ability to buy upgrade to false until conditions are met
let autoClickCount = 0; // Sets up amount of auto-clicks bought (used in function)
let autoClickCost = 10; // Cost of buying first level of upgrade

// CLICK BUTTON TO BUY AN UPGRADE IF AVAILABLE
const autoClickBtn = document.querySelector('#auto-click-btn');
autoClickBtn.addEventListener('click', buyAutoClick);

// FUNCTION TO RUN WHEN WANTING BUYING UPGRADE
function buyAutoClick(){
    if(canBuyAutoClick === true){
        currentTotal = currentTotal - autoClickCost; // Subtracts current amount from cost
        updateGame();   // Immediately update UI to show new amount of cookies after purchase
        autoClickCount++; // Increase number of cookies given each second
        autoClickCost = autoClickCost * 2; // Increase cost of upgrade *2 each time upgrade is bought
        canBuyAutoClick = false; // Prevents going into negative by setting up for next check if upgrade is available
    }
    checkAutoClick();
}

// FUNCTION THAT RUNS WHEN UPGRADE IS BOUGHT
function autoClickFunction(){
    currentTotal = currentTotal + autoClickCount; // Calculates amount of cookies given each second
    updateGame();
}

function checkAutoClick(){
    if(currentTotal >= autoClickCost){
        canBuyAutoClick = true; // If condition is met (user has more cookies than cost), sets ability to buy upgrade to true
        autoClickBtn.classList.remove('power-up-locked');
        autoClickBtn.classList.add('power-up-unlocked');
        autoClickBtn.innerHTML = "NEXT AUTO-CLICK AVAILABLE <br> PAY " + autoClickCost + " COOKIES TO UNLOCK";
    }else{
        autoClickBtn.classList.remove('power-up-unlocked');
        autoClickBtn.classList.add('power-up-locked');
        autoClickBtn.innerHTML = "NEXT AUTO-CLICK LOCKED, YOU NEED: <br>" + autoClickCost + " COOKIES";
    }
}