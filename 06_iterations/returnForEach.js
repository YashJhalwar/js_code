const myArr = ["java", "CPP", "java Script","Ruby"]

// myArr.forEach((item) => {
//     console.log(item)
// })

// okay it will print but what if we want to store it in variable or return it 

const Temp = myArr.forEach((item) => {
    // console.log(item)
    // return item
})

// console.log(Temp) // it shows undefined don't return value even you try manualy

// --------so yep we have filter for it---------
// it also take callBack but you have to give condition too #{to return}
const numbers = [1,2,3,4,5,6,7,8,9,10]

// number.filter(() => condition)
// number.filter(() => {
//     return condition})

// const myFilter = numbers.filter((num) => {
//       return num > 4
// })
// console.log (myFilter)


// const myFilter = numbers.filter((num) => num > 4)
// console.log (myFilter)

// const newArray = []

// numbers.forEach((num) =>{

//     if(num > 5)
//     {
//        newArray.push(num)
//     }

// })

// console.log(newArray)

const books = [ 
    { title: "The Alchemist", author: "Robert C. Martin", pages: 197, year: 1988, genre: "Self-help" },
    { title: "Atomic Habits", author: "James Clear", pages: 320, year: 2018, genre: "Self-help" },
    { title: "Clean Code", author: "Robert C. Martin", pages: 464, year: 2008, genre: "Programming" },
    { title: "You Can Win", author: "Shiv Khera", pages: 300, year: 1998, genre: "Motivational" } 
];

 const result = books.filter((bk) => {
    return bk.genre === "Self-help" && bk.author === "Robert C. Martin"
})

console.log(result)




