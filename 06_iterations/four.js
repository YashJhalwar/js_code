const myObj = {
    js : "java script",
    cpp : "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const [key, value] in myObj) {

    //console.log(key)

}
//output 
// j
// c
// r
// s
// bc This syntax is invalid for for...in, but it doesn’t throw an error — instead,
// it treats [key, value] as a string (like "key,value") and iterates over the characters!
// for (const char in "key,value") {
//     console.log(char); // logs index positions (0, 1, 2, ...)
// }
// But due to how JS handles variables here, it still ends up logging j, c, r, s (first letters of keys, but unintentionally).
//yep you you can write more after the term value

for (const key in myObj) {

    //console.log(key)
    //console.log(myObj[key])

}

// if you want to use for of you can do 

for (const [key,value] of Object.entries(myObj)) {
    
    //console.log(key, "=>", value);
}

// -------for in for array----------

const programmig = ["js", "cpp", "java"]

for (const key in programmig) {
    // console.log(key)
   
}

// const map3 = new Map()

// map3.set("IN", "India")
// map3.set("NW", "NEW YORK")
// map3.set("Fr", "France")

// for (const key in map3) {
//     console.log(key)

// }
// it is not itteratable so you don't write it in such loop way

