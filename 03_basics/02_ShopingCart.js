function calculateCartPrice(num1){

    return num1
}

//console.log(calculateCartPrice(100))

// Rest operator example RO 

function calculateCartPriceRO(...num){

    return num
}

//console.log(calculateCartPriceRO(100, 200, 300, 400));

function Experiment (val1, ...num){

    return num
}

//console.log(Experiment(100, 200, 300, 400, 500, 600));

// objects in functions

const user = {

    username: "Yash",
    price: 199
}

function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
//ypu can also pass direct object in function

handleObject({
    username: "Jhawlar",
    price: 299
})

//same you can do with arrays too

const myArr = [1, 2, 3, 4]

function arraySecondValue(anyArray){

    return anyArray[2]
}

console.log(arraySecondValue(myArr));