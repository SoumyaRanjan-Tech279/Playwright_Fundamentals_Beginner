//Functions

// Declarative Function.
// declarative function is a function that is defined using the function keyword and has a name. It can be called before it is defined in the code.
helloOne(); //Calling the function
 function helloOne(){
    console.log("Hello One");
 }

 helloOne(); //Calling the function


 //Annonymous Function
 //annonymous function is a function that is defined without a name. It can be assigned to a variable and called using that variable. this can be 
 // called only after it is defined in the code.
 var helloTwo = function() {
    console.log("Hello Two");
 };
 helloTwo(); //Calling the function

 //ES6 function syntax or arrow function
 //arrow function is a function that is defined using the arrow syntax. It can be assigned to a variable and called using that variable. this can be 
 // called only after it is defined in the code.

 var helloThree = () => {
    console.log("Hello Three");
 }  

helloThree(); //Calling the function


//Function with arguments

function printName(name,lastName){
    console.log("Hello " + name + " " + lastName);
}
printName("John"); //Calling the function with argument but with lastname missing
printName("John", "Smith"); //Calling the function with argument


//function with return value
function multiplyByTwo(number){
    var result = number*2;
    return result;
}

var myresult = multiplyByTwo(5); //Calling the function with argument and storing the return value
console.log(myresult); //Printing the return value

//Importing Approach 1
//importing function from another file (exact function name should be used while importing)
import {printAge} from '../helpers/printHelpers.js';
printAge(25); //Calling the imported function with argument

//Importing Approach 2
//importing function from another file (using a namespace to import all functions from the file)
import * as Helper from '../helpers/printHelpers.js';
Helper.printAge(30); //Calling the imported function with argument