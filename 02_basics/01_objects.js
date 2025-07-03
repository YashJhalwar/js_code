// singleton => 
// object literal below

const mySym = Symbol("key1") //Symbol concept

const myObj = {

    name: "Yash",
    age: 23,
    email: "yashjhalwar@123mail",
    location: "India",
    isActive: false,
    lastLoginDay: ["monday", "saturday"], // , lagana mat bhuna bhai erroe hi bujhta reh jayega 
    [mySym]: "myKey1", // mySym: "myKey1", esse nahi likhne ka it work as a string or dont show if you access right too

}

//therehare are two ways to access object properties
// 1. dot notation
console.log(myObj.name);
// 2. bracket notation
console.log(myObj["email"]);

// theres a one interview quetion about the Symbol data type
//it is simple just declare a symbol, act as a key and use or print it 

//console.log(myObj.mySym);
//console.log(typeof(myObj.mySym)); //it shows string data type

console.log(myObj[mySym]);
console.log(typeof(myObj[mySym]));

//how to change the value of object property

myObj.email = "ayush@gmail.com"
console.log(myObj);

//you can freeze the object to prevent modifications
//Object.freeze(myObj);

//trying to change the email property after freezing
myObj.email = "newemail@gmail.com";
console.log(myObj.email); //it will still show "ayush@gmail.com"


myObj.city = "Indore" //adding a new property to the object

console.log(myObj); //it will show the new property city

//theres no discrimination in functions you can treat them as a variable

myObj.greeting = function(){

    console.log("Hello everyone Yash this side from greeting function");

}

console.log(myObj.greeting); //calling the function only it shows [Function (anonymous)]

myObj.greetingTwo = function(){

    console.log(`HEllo everyone my name is ${this.name}`); // here this refers to the object myObj

}

console.log(myObj.greetingTwo()); 
console.log(myObj.greeting()); // calling the function it will show the output of the function


