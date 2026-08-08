//Approach 1: using class keyword to create a class and methods inside the class
import {CustomerDetails} from '../helpers/printHelpers.js';

var customerDetails = new CustomerDetails();
customerDetails.printFirstname("Steve");
customerDetails.printLastname("Jobs");


//Approach 2: using function keyword to create a class and methods inside the class
function CustomerDetails1(){
    this.printFirstname = function(firstname){
        console.log(`The first name of the customer is ${firstname}`);
    };
    this.printLastname = function(lastname){
        console.log(`The last name of the customer is ${lastname}`);
    };
}

var customerDetails1 = new CustomerDetails1();
customerDetails1.printFirstname("Bill");
customerDetails1.printLastname("Gates");   


//Approach 3: using function keyword to create a class and methods inside the class
function CustomerDetails2(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

CustomerDetails2.prototype.printFirstname = function(){
    console.log(`The first name of the customer is ${this.firstname}`);
}

CustomerDetails2.prototype.printLastname = function(){
    console.log(`The last name of the customer is ${this.lastname}`);
}

var customerDetails2 = new CustomerDetails2("Elon", "Musk");
customerDetails2.printFirstname();
customerDetails2.printLastname();


//Approach 4: remove the constructor and use the prototype to create methods inside the class
import {customerDetails3} from '../helpers/printHelpers.js';
customerDetails3.printFirstname1('SRS');
customerDetails3.printLastname1('Sabby');

