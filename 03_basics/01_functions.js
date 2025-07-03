function addTwoNumbers(num1, num2) //num1, num2 parameters
{
    console.log(num1 + num2);
}

//addTwoNumbers(60, 9); // 60, 9 => arguments

//const result = addTwoNumbers(60, 9); //store in veriable #result

//console.log("Result:", result); // this will show undefine bc of #functionreturn

//*************concept of return****************
function subTwoNumbers(num1, num2)
{
    // let subResult = num1 - num2; //local variable
    // return subResult;
    return num1 - num2;
}

const subResult = subTwoNumbers(4, 2)

//console.log(subResult)
//console.log("Result:", subResult);

function loginUserMessage(userName = "Aparichit"){

    if(userName === undefined){

        console.log("Please enter a valid user name");
        return
    }
 
    return `Welcome ${userName}, you are logged in successfully!`
}

console.log(loginUserMessage("Yash"));
//console.log(loginUserMessage(""));
console.log(loginUserMessage());

//******more ways******

// if(!undefined)

