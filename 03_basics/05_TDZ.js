// lets start with this TDZ temporary dead zone exicution in js
/*The Temporal Dead Zone is the time between entering a block scope and declaring a variable with let, const, or class.

🔥 During this time:

You cannot access the variable.

If you try, JavaScript throws a ReferenceError.

The variable is in a sort of "waiting zone" — it exists, but is not usable yet. */

function TDZ (){
     let name = "yash";
   
    const sayName = function (name) 
    { console.log(name);
       
    }
    //  let name = "yash";
    
    // sayName();
    //  let name = "yash";
    

}
// sayName()

// --------function+TDZ---------------

{
     sayName();
  const sayName = () => console.log(name);
//   let name = "Yash";
//   sayName();
}