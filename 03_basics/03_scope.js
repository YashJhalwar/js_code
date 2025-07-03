function one(){
   const username = "Yash"

   function two(){
     const website = "youtube"
     console.log(username);
    }

    //console.log(website);
    two();


}
//one();

if(true){
    const username = "Yash"

    if(username === "Yash"){
        const website = "youtube"
        //console.log(username + website)
    }
      //console.log(website);

}

//console.log(username);


// there are also diff types of declarations 

function addOne(num1){

    return num1 + 1
}

console.log(addOne(7));

// addTwo(7)  exicute before declaration
const addTwo = function(num1){
    return num1 + 2
}
console.log(addTwo(7));