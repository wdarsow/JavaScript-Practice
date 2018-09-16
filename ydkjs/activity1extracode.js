// let totalCurrentPurchase = taxCalculation(phonePrice);


// console.log(totalCurrentPurchase);

// console.log(moneyFormat(totalCurrentPurchase));

// let currentPurchase = 0; 
// currentPurchase += taxCalculation(phonePrice);
// console.log(currentPurchase);

function purchasePhone() {
    if(bankBalance > 0) {
        phonePurchaseCounter++;
        currentPurchase+= phonePrice;
        console.log("Purchasing phone " + phonePurchaseCounter);
        console.log("Your current purchase amount is" + currentPurchase);
        console.log("Now it's time to purchase accessories.");
    } else {
        console.log("Sorry, bank balance is less than 0. You can't purchase any more phones!");
    }
}

function purchaseAccessories() {
    if(currentPurchase + accessory < spendThreshold) {
        
    }
}