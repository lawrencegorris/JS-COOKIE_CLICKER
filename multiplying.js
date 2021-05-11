let multiplierLevel = 0;
multiplyBtn.addEventListener('click', buyMultiply);
function buyMultiply(){
    if(canBuyUpgrade === true && multiplierLevel === 0){
        canBuyUpgrade = false;
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
        currentTotal -= 20;
        multiplierLevel = 1
        console.log('bought first upgrade');
    }else if(canBuyUpgrade === true && multiplierLevel === 1){
        canBuyUpgrade = false;
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
        currentTotal -= 30;
        multiplierLevel = 2;
        console.log('bought second upgrade');
    }
    else if(canBuyUpgrade === true && multiplierLevel === 2){
        canBuyUpgrade = false;
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
        currentTotal -= 50;
        multiplierLevel = 3;
        console.log('bought third upgrade');
    }
    else if(canBuyUpgrade === true && multiplierLevel === 3){
        canBuyUpgrade = false;
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
        currentTotal -= 100;
        multiplierLevel = 4;
        console.log('bought fourth upgrade');
    }
    else if(canBuyUpgrade === true && multiplierLevel === 4){
        canBuyUpgrade = false;
        multiplyBtn.innerHTML = "NEXT UPGRADE LOCKED";
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
            currentTotal++;
            feedback.innerHTML = 'You don\'t get any extra cookies yet, start saving and buy an upgrade!';
            break;
        case 1:
            currentTotal += 2;
            feedback.innerHTML = 'You now get 2 cookies each click!';
            break;
        case 2:
            currentTotal += 5;
            feedback.innerHTML = 'You now get 5 cookies each click!';
            break;
        case 3:
            currentTotal += 10;
            feedback.innerHTML = 'You now get 10 cookies each click!';
            break;
        case 4:
            currentTotal += 15;
            feedback.innerHTML = 'You now get 15 cookies each click!';
            break;
        case 5:
            currentTotal += 25;
            feedback.innerHTML = 'You now get 25 cookies each click!';
            break;
    }
}