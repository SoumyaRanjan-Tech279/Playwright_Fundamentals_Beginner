//Logical Operators

// && - Logical AND
// || - Logical OR
// ! - Logical NOT 

console.log(true && true); // true and all values have to be true for the result to be true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true and only one value has to be true for the result to be true
console.log(true || false); // true
console.log(false || false); // false  


//example

var ageIsMoreThan18 = false
var isUSCitizen = true

var eligibilityForDl = ageIsMoreThan18 && isUSCitizen; // both conditions have to be true for the result to be true
console.log('this customer is eligible for DL : ' + eligibilityForDl);

var eligibilityForDl = ageIsMoreThan18 || isUSCitizen; // at least one condition has to be true for the result to be true
console.log('this customer is eligible for DL : ' + eligibilityForDl);

console.log(!true); // false and it reverses the value of the boolean
console.log(!false); // true

console.log(6!==10); // true and it checks if the values are not equal and also checks the type of the value