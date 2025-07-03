// function sum(num1, num2){
//     return num1 + num2;
// }

// function calculator(num1, num2, sumCallback)
// {
//     return sumCallback(num1, num2)
    
// }

// console.log(calculator(5, 6, sum));

function hello (name, lastname){

   return `Hello${name}${lastname}`// never return console.log

}
function greeting(name, lastname, callBackFun){

    return callBackFun(name, lastname)

}

console.log(greeting(" Yash", " Jhalwar", hello)); // hello() we dont use such term bc we dont call callback function instant but if you want just put ()




