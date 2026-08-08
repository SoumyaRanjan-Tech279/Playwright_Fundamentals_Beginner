// Concatination and Interpolation

var cupPrice = 50;
var itemName = "Cup";

var messageToPrint = "The price for your Cup is 50 Dollars";

console.log(messageToPrint);

var messageToPrint1 = "The price for your " + itemName + " is " + cupPrice + " Dollars"; // Concatenation --> Approach 1
console.log(messageToPrint1);


var messageToPrint2 = `The price for your ${itemName} is ${cupPrice} Dollars`; // Interpolation --> Approach 2
console.log(messageToPrint2);