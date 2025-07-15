const userEmail = []

if(userEmail){
    console.log("yes true")
}
else{
    console.log("no false");
    
}

//empty array ko true man liya 
// empty string ko false

// falsy values 
// flase, 0, -0,BigInt 0n, null, undefined, "", NaN

// surprising truthy value
// "0", "false", " ", [], {}, function(){}

// if(userName.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

    if(Object.keys(emptyObj).length === 0){

    }

// Nullish Coalescing operator (??): we want to see on null and undefined

// check safety

let val1

val1 = 5 ?? 10              // 5
val1 = null ?? 10           //10
val1 = undefined ?? 15      //15
val1 = null ?? 10 ?? anyvalue   // jo pehle mil jayegi assign kar dega


// terniary operator
// condition ? true : false

const iceTea = 100
iceTea >= 80 ? console.log("yes greater") : console.log("not greater")

