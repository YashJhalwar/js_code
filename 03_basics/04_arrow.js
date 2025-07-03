const user = {

    username: "Yash",
    price: 100,

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage() 
//user.username = "Jhalwar"
//user.welcomeMessage()

//console.log(this);  // node enviroment => {} empty obj
//but on browser console it shows window (bc on browser window is global obj)

// //function chai(){
//    // let username = "Yash"
//    // console.log(this);

//    /* below context only run in object context 
//     let username = "Yash"
//     console.log(this);
//    */
// }
// }
// chai()

// const chai = function(){
 
//      let username = "Yash"
//      console.log(this.username);
// }

// chai()

//******const chai = () => {} arrow function */

const chai = () => {
 
     let username = "Yash"
     console.log(this);
}

// chai()

// core arrow function () => {} ----you also store it in vriable---- 

// const addTwo = (num1, num2) => {

//     return num1 + num2
// }
// console.log(addTwo(5, 6));

//---------implicit return in arrow function

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

//console.log(addTwo(5, 6));

// if you use {  } you have to write return keyword
// but in parentheses you don't have to write return keyword

//----howto return obj 

const addTwo = (num1, num2) => ({username: "Yash"})
console.log(addTwo(5, 6));

