// Conditional Statement

var condition = true;

if (condition){
    //execute code
}
else if (condition){
    //execute code
}
else{
    //execute code 
}

//Examples

// if hour between 6 and 12 print "Good Morning"
//if hour between 12 and 18 print "Good Afternoon"
// otherwise print "Good Evening"

var hour = 15;

if (hour >= 6 && hour <12){
    console.log("Good Morning");
}
else if (hour >= 12 && hour <18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}   


var ageismorethan18 = true;
var isUSCitizen = false;

if (ageismorethan18 && isUSCitizen){
    console.log("You are eligible for DL");
}  
else{
    console.log("You are not eligible for DL");
}