let bankBalance = 0;
const taxRate = .0765;
const phonePrice = 100;
const accessory = 25;
const spendThreshold = 155;

function taxCalculation(purchasePrice) {
    moneyFormat(Number.parseFloat((taxRate * purchasePrice).toFixed(2)));   
}

function moneyFormat(arg1) {
    let formattedPurchPrice = (`$${arg1}`);
    console.log(formattedPurchPrice);
}

let totalCurrentPurchase = taxCalculation(phonePrice);
// console.log(totalCurrentPurchase);

// console.log(moneyFormat(totalCurrentPurchase));

// let currentPurchase = 0; 
// currentPurchase += taxCalculation(phonePrice);
// console.log(currentPurchase);
