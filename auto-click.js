let autoClick;
let autoClickLevel = 0;
const autoClickBtn = document.querySelector('#auto-click-btn');
autoClickBtn.addEventListener('click', buyAutoClick);

function buyAutoClick(){
    if(canBuyUpgrade === true && currentTotal >= 20){
        autoClickLevel = 1;
        canBuyUpgrade = false;
        autoClick = setInterval(autoClickCount, 1000);
        currentTotal -= 20;
        console.log('bought first auto click');
    }else if(canBuyUpgrade === true && currentTotal >= 50){
        autoClickLevel = 2;
        canBuyUpgrade = false;
        autoClick = setInterval(autoClickCount, 1000);
        currentTotal -= 50;
        console.log('bought second auto click');
    }
    updates();
    checkUpgradeAvailability();
}

function autoClickCount(){
    switch(autoClickLevel){
        case 1:
            currentTotal++;
            break;
        case 2:
            currentTotal += 2;
            break;
        case 3:
            currentTotal += 5;
            break;
        case 4:
            currentTotal += 10;
            break;
        case 5:
            currentTotal += 15;
            break;
    }
    showAmount.innerHTML = currentTotal.toString();
    updates();
}

console.log(currentTotal);