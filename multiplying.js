// SETUP MULTIPLY UPGRADES
let canBuyMultiply = false;
let multiplyCost = 5;
let cookieMultiplier = 0;

const multiplyBtn = document.querySelector('#multiply-btn');
multiplyBtn.addEventListener('click', buyMultiply);

function buyMultiply(){
    if(canBuyMultiply === true){
        currentTotal = currentTotal - multiplyCost;
        updateGame();
        cookieMultiplier++;
        multiplyCost = multiplyCost * 2;
        canBuyMultiply = false;
    }
    checkMultiply();
}

function checkMultiply(){
    if (currentTotal >= multiplyCost){
        canBuyMultiply = true;
        multiplyBtn.classList.remove('power-up-locked');
        multiplyBtn.classList.add('power-up-unlocked');
        multiplyBtn.innerHTML = "NEXT MULTIPLIER AVAILABLE <br> PAY " + multiplyCost + " COOKIES TO UNLOCK";
    }else{
        multiplyBtn.classList.remove('power-up-unlocked');
        multiplyBtn.classList.add('power-up-locked');
        multiplyBtn.innerHTML = "NEXT MULTIPLIER LOCKED, YOU NEED: <br>" + multiplyCost + " COOKIES";
    }
}