let bankBalance = 600;
const taxRate = .0765;
const phonePrice = 100;
const accessory = 25;
const spendThreshold = 155;
let phonePurchaseCounter = 0;
let accessoryPurchaseCounter = 0;
let currentPurchase = 0;

function purchPhone() {
    phonePurchaseCounter++
    console.log("You are attempting to purchase phone: " + phonePurchaseCounter);
    currentPurchase += phonePrice;
    console.log("Your current purchase amount is at: " + currentPurchase);
    while((currentPurchase + accessory) < spendThreshold) {
        accessoryPurchaseCounter++;
        console.log("You are attempting to purchase accessory: " + accessoryPurchaseCounter);
        currentPurchase += accessory;
        console.log("Your current purchase amount is at: " + currentPurchase);
    }
    taxCalculation(currentPurchase);
}

function taxCalculation(currentPurchase) {
    // console.log(currentPurchase)
    moneyFormat(Number.parseFloat(((taxRate * currentPurchase) + currentPurchase).toFixed(2)));   
}

function moneyFormat(arg1) {
    let formattedPurchPriceString = (`$${arg1}`);
    let formattedPurchPrice = arg1;
    console.log("Your total current phone and accessory costs including taxes are: " + formattedPurchPriceString);
    console.log(formattedPurchPrice);
    if(formattedPurchPrice < bankBalance) {
        console.log("You just purchased a new phone and " + accessoryPurchaseCounter + " new accessories!")
        bankBalance -= formattedPurchPrice;
        console.log("Your new bank balance is: " + bankBalance);
        accessoryPurchaseCounter = 0;
        phonePurchaseCounter = 0;
        currentPurchase = 0;
        formattedPurchPrice = 0;
        purchPhone();
    } else {
        console.log("Sorry, you don't have enough money to purchase the phone and accessories you selected. Your current bank balance is: " + bankBalance);
    }
}

purchPhone();