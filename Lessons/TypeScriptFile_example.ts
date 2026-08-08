
var customerFirstname = 'John';
var customerLastname = 'Doe';
var customerAge = 30;

// TypeScript allows you to specify the type of a variable explicitly. For example, you can declare a variable as a string, number, boolean, etc.
// TypeScript also supports type inference, which means that if you don't specify a type, TypeScript will try to infer it based on the value assigned to the variable.
// Tpescript doesn't allow to assign a value of a different type to a variable once it has been declared with a specific type. For example, if you declare a variable as a string, you cannot later assign a number to it.

var customerFirstname: string = 'John';
var customerLastname:string = 'Doe';
var customerAge:number = 30;


type Customer = {
    firstname: string,
    lastname: string,
    age: number,
    active : boolean
};

var firstCustomer: Customer = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    active: true
}