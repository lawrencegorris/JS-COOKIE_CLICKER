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
    else if(canBuyUpgrade === true && multiplierLevel === 2){
        canBuyUpgrade = false;
        currentTotal -= 50;
        multiplierLevel = 3;
        console.log('bought third upgrade');
    }
    else if(canBuyUpgrade === true && multiplierLevel === 3){
        canBuyUpgrade = false;
        currentTotal -= 100;
        multiplierLevel = 4;
        console.log('bought fourth upgrade');
    }
    else if(canBuyUpgrade === true && multiplierLevel === 4){
        canBuyUpgrade = false;
        currentTotal -= 150;
        multiplierLevel = 5;
        console.log('bought fifth upgrade');
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
        case 3:
            currentTotal += 10;
            break;
        case 4:
            currentTotal += 15;
            break;
        case 5:
            currentTotal += 25;
            break;
    }
}