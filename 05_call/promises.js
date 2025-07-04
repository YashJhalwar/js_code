// // let promise = new Promise((resolve, reject) => {

// //     console.log("I am a Promise");
// //     reject("some eror occure");
// // });
// function orderFood(foodReadyCallback) {
//     console.log("Order placed...");
//     foodReadyCallback();
    
//     // setTimeout(() => {
//     //     console.log("Food is ready!");
//     //     foodReadyCallback(); // waiter calls you
//     // }, 3000);
// }

// orderFood(function () {

//      setTimeout(() => {
//         console.log("Food is ready!");
//         foodReadyCallback(); // waiter calls you
//     }, 3000);
//     // console.log("Eating food now!");
// });

// function orderFood(foodReadyCallback) {
//     console.log("Order placed...");
    
//     setTimeout(() => {
//         console.log("Food is ready!");
//         foodReadyCallback(); // waiter calls you
//     }, 3000);
// }

// orderFood(function () {
//     console.log("Eating food now!");
// });



// function orderFood (functionCallBack){
//     console.log("sir wait your order placed");

//     setTimeout( () => {

//         console.log("your order is ready");
//         console.log(functionCallBack)
        
//     }, 1000)

// }

// orderFood( 1000 /*() =>{

//     setTimeout(  () => {
            
//     console.log("sir ji khaiye ab ")
// },2000)
// } */ 

// )

// -----promise example------

// let foodOrder = new Promise((resolve, reject) => {
//     let isFoodAvailable = true;

//     if (isFoodAvailable) {
//         setTimeout(() =>  resolve("Food delivered 🍕"), 3000);
        
//     } else {
//          reject("Sorry, food not available ❌");
//     }
// });

// foodOrder
// .then((msg) => console.log(msg))     // Promise success handler
// .catch((err) => console.log(err));   // Promise failure handler

// ------promise chain--------

// function buyIngridient() {
   
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log("bought ingridients");
//             resolve("success")
            

//         }, 1000)
//     })

// }

// function mixIngridients() {
   
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log("ingridients mixed");
//             resolve("success")
            

//         }, 1000)
//     })

// }

function buyIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🛒 Bought ingredients");
            resolve("ingredients");
        }, 1000);
    });
}

function mixIngredients(ingredients) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🥣 Mixed " + ingredients);
            resolve("batter");
        }, 1000);
    });
}

buyIngredients()
    .then((ingredients) => mixIngredients(ingredients))
    .then((batter) => console.log(batter))

