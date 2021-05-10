multiplyBtn.addEventListener('click', buyMultiply);
function buyMultiply(){
    if(canBuyUpgrade === true && multiplierLevel === 0){
        canBuyUpgrade = false;
        currentTotal -= 20;
        multiplierLevel = 1
        console.log('bought first upgrade');
    }else if(canBuyUpgrade === true && multiplierLevel === 1){
        canBuyUpgrade = false;
        currentTotal -= 30;
        multiplierLevel = 2;
        console.log('bought second upgrade');
    }
    updates();
    checkUpgradeAvailability();
}

function cookieUpgrades(){
    switch (multiplierLevel){
        case 0:
            currentTotal += 1;
            break;
        case 1:
            currentTotal += 2;
            break;
        case 2:
            currentTotal += 5;
            break;
    }
}