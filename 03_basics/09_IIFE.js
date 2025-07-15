// ------imidiately invoked function expression---------
// if you want to exicute function immidiately and also don't want to polute it by global block polution veriables ec.effect it
// very simple syntex ()()

(function IIFE(){
    console.log("DB Connected")
})();

// (() => console.log("Arrow DB Connected"))() // it will show error bc of upper function IIFE bc they don't know where to stop use ;
(function dbTwo(){
    console.log("DB connected two")
})(); //it will also show error bc of ; not in upper func,put ; and try again

// you can also give para or let veriable

((name) =>{
    console.log(`Hello ${name}`);

})("Yash");

// -------IIFE was consined by Ben Alman as "self-executing anonymous function"--------
// or we say before let,const, calss existed 

// const counter = (function(){
//     let count = 0;
    // return   //it will show error bc of this line Because of JavaScript’s automatic semicolon insertion (ASI).
//      {
//         increment: function(){
//             count++;
//             return count;
//         },

//     get: function(){
//         return count;
//     },
// };
// })();

// counter.increment()

const counter = (function(){
    let count = 0;
    return {
        increment: function(){
            count++;
            return count;
        },

    get: function(){
        count++;
        return count;
    },
};
})();

console.log (counter.increment());
console.log (counter.get());

// IIFE is also good for initialization logic that runs once and never again.
//IIFE is not hoisted 

//run(); // referanceError
//();

(function run(){
    console.log("IIFE is not hoisted");
})();

//Even though the function has a name (run), that name is local to the function’s scope.
// The function isn’t "hoisted" or stored globally under that name; it’s simply executed as soon as it is defined.
//Thus, you don’t have to (and can't) call run() from outside the IIFE.


