// SETUP
let currentTotal = 0;

// DOM
const cookieBtn = document.querySelector('#cookie-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const showAmount = document.querySelector('#current-cookies');


// FUNCTION STACK
cookieBtn.addEventListener('click', cookieClicked);
function cookieClicked(){
    increaseCookies();
    showAmount.innerHTML = currentTotal;
}

function increaseCookies(){
    currentTotal++;
}

multiplyBtn.addEventListener('click', buyMultiply);
function buyMultiply(){

}