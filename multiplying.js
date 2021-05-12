// SETUP MULTIPLY UPGRADES
let canBuyMultiply = false; // Sets ability to buy upgrade to false until conditions are met
let multiplyCost = 5; // Cost of buying first level of upgrade
let cookieMultiplier = 0; // When buying upgrade, uses this to increase to amount of cookies that are given each turn

// CLICK BUTTON TO BUY AN UPGRADE IF AVAILABLE
const multiplyBtn = document.querySelector('#multiply-btn');
multiplyBtn.addEventListener('click', buyMultiply);

// FUNCTION TO RUN WHEN WANTING TO BUYING UPGRADE
function buyMultiply(){
    if(canBuyMultiply === true){
        currentTotal = currentTotal - multiplyCost; // Subtracts current amount from cost
        updateGame();   // Immediately update UI to show new amount of cookies after purchase
        cookieMultiplier++; // Increase number of cookies given each click
        multiplyCost = multiplyCost * 2;    // Increase cost of upgrade *2 each time upgrade is bought
        canBuyMultiply = false; // Prevents going into negative by setting up for next check if upgrade is available
    }
    checkMultiply();
}

// FUNCTION TO CHECK IF USER CAN BUY UPGRADE
function checkMultiply(){
    if (currentTotal >= multiplyCost){
        canBuyMultiply = true; // If condition is met (user has more cookies than cost), sets ability to buy upgrade to true
        multiplyBtn.classList.remove('power-up-locked');
        multiplyBtn.classList.add('power-up-unlocked');
        multiplyBtn.innerHTML = "NEXT MULTIPLIER AVAILABLE <br> PAY " + multiplyCost + " COOKIES TO UNLOCK";
    }else{
        multiplyBtn.classList.remove('power-up-unlocked');
        multiplyBtn.classList.add('power-up-locked');
        multiplyBtn.innerHTML = "NEXT MULTIPLIER LOCKED, YOU NEED: <br>" + multiplyCost + " COOKIES";
    }
}