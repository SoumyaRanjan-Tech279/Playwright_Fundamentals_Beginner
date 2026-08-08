// Objects 

var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    cars: ["Volvo", "BMW", "Ford"]
};
console.log(customer); // Print the entire object
console.log(customer.age); // Accessing the age property of the customer object
console.log(customer.lastName); // Accessing the lastName property of the customer object

console.log(customer["firstName"]); // Accessing the firstName property using bracket notation

// Dot Annotation is the most common way to access properties of an object, but bracket notation can be useful when the property name is dynamic or not a valid identifier.

// Dot Annoation & update the value of the property

customer.firstName = "Jane"; // Updating the firstName property of the customer object
console.log(customer.firstName); // Print the updated firstName property

// Bracket Annoation & update the value of the property
customer["lastName"] = "Smith"; // Updating the lastName property of the customer object
console.log(customer["lastName"]); // Print the updated lastName property

console.log(`${customer.firstName} ${customer.lastName} is ${customer.age} years old.`); // Using template literals to print a message with object properties

//Array of Objects
var car = ["Volvo","Toyota","Tesla"];

console.log(car[2]); // Accessing the third element of the car array

//Replace the value of the 2nd element of the car array
car[1] = "BMW";
console.log(car[1]); // Print the updated 2nd element of the car array

//accessing Car element within an object Customer 
console.log(customer.cars[0]); // Accessing the first car in the customer's cars array