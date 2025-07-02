// array
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// it has prototypeaccess
const myArr = []
const myArr2 = [1, 2, 3, 4]
//console.log(myArr2[3]);
/*
myArr2.push(69)

myArr2.unshift(8, 9)



console.log(myArr2);

// slice, splice

console.log("A", myArr2);

const sliceArr = myArr2.slice(1, 2)

console.log(sliceArr);
console.log("B", myArr2); //it works on copy no changes in original array

const spliceArr = myArr2.splice(1, 2)

console.log(spliceArr);
console.log("C", myArr2); //it also change original array

*/

const marvelHeros = ["thor", "iron man", "CA"]
const indianHeros = ["shaktiman", "hathim", "hero"]

//marvelHeros.push(indianHeros)
//console.log(marvelHeros);

//const allHeros = marvelHeros.concat(indianHeros)
//console.log(allHeros);

//we can also use spread

const allHeros = [...marvelHeros, ...indianHeros]
console.log(allHeros);

//diff condition array in array in array etc
 const arrayInArray = [1, 2, 3, 4, [1, 2, 3, 4], [1, 2, 3], [1, 2]]

 const realArr = arrayInArray.flat(Infinity)
 console.log(realArr) 

 console.log(Array.isArray("Yash")); //check is array exist it's a array
 console.log(Array.from("Yash")); // create a new array
 console.log(Array.from({name: "Yash"})); // interesting basically we have to specify (give empty array)
 
 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3));




