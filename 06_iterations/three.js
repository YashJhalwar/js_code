// for of loop

// for (const element of object) {
    
// }

let myArr = [1, 2, 3, 4, 5]
const greeting = "hello world"
const myObj = {
    name : "Yash",
    city : "Rajesthan",
    add : "any add"
}

for (let num of myArr) {
    
    //console.log(num)
    
    
}
for (let greet of greeting) {
    
    //console.log(greet)
    
    
}
// for (let Obj of myObj) {
    
//    // console.log(Obj)//object is not itterable in for of 
    
    
// }

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
//  const map1 = new Map();

//  this is how you can set values

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// map1.set("d", 1);


// But in a Map, values can repeat — only keys must be unique.

//console.log(map1)


// --------Set, where values must be unique:

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(1); //duplicate value ignored
// console.log(set); // Set(2) { 1, 2 }


// ------for of on map---------

const map2 = new Map()

map2.set("IN", "INDIA");
map2.set("NY", "NEW YORK");
map2.set("FR", "FRANCE");
map2.set("IN", "INDIA");


for(const key of map2)
{
    console.log(key)
}

// output
// [ 'IN', 'INDIA' ]
// [ 'NY', 'NEW YORK' ]
// [ 'FR', 'FRANCE' ]

for(const [key, value] of map2)
{
    console.log(key, ":-", value) // try seperate key and value
}
// output
// IN :- INDIA
// NY :- NEW YORK
// FR :- FRANCE



