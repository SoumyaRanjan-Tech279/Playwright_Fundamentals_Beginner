//Loops

// For Loop

var statement1 = 0; //initialization
var statement2 = 0; //initialization  
var statement3 = 0; //initialization

for(statement1; statement2; statement3){
    //code block to be executed
}

for(let i=0; i<5;i++){
    console.log('Hello World ' + i); //Prints 0,1,2,3,4
}

var cars = ['Volvo','BMW','Tesla'];

//for of loop

for (let car of cars) {
    console.log(car); //Prints Volvo, BMW, Tesla
    if(car === 'BMW'){
        console.log('BMW is found');
        break; //Breaks the loop when BMW is found
    }
}

//ES6 syntax for each loop

cars.forEach(car=>{
    console.log(car); //Prints Volvo, BMW, Tesla
})