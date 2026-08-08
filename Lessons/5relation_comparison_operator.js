// Relational or Comparison Operators

// > - Greater than
// < - Less than
// >= - Greater than or equal to
// <= - Less than or equal to


var result = 10 > 3;
console.log(result); // true

var result1 = 10 < 3;
console.log(result1); // false

var result2 = 10 >= 10;
console.log(result2); // true

var result3 = 10 <= 3;
console.log(result3); // false


// == - Equal to
// != - Not equal to
// === - Strictly equal to (checks value and type)
// !== - Strictly not equal to (checks value and type)

var x = 1;
console.log(x==1); // true and losely equal to (checks value only)

var x = 1;
console.log(x==2); // false

var y = 1;
console.log(y!=2); // true

var z = 1;
console.log(z===1); // true and strictly equal to (checks value and type)

var z = 1;
console.log(z==='1'); // false

var w = 1;
console.log(w!==2); // true

var w = 1;
console.log(w!==1); // false

var w = 1;
console.log(w!=='1'); // true