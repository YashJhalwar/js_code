//const tinderUser = new Object(); // creating an empty object using Object constructor (singleton obj)

const tinderUser = {}; // creating an empty object using non singleton obj
tinderUser.name = "Yash";
tinderUser.age = 23;
tinderUser.isActive = false;

//console.log(tinderUser);

// what if obj have object inside it

const regularUser =  {

    email: "abs@gmaildotcom",
    fullName: {
         userName: {
        firstName: "Yash",
        lastName: "Jhalwar"
    }
    }
}

//console.log(regularUser);
//console.log(regularUser.fullName.userName.firstName);

// how to combine two objects //

const obj1 = {1: 1, 2: 2}
const obj2 = {3: 3, 4: 4}
const obj3 = {5: 5, 6: 6}

//const obj4 = {obj1, obj2, obj3} // this will create a new object with obj1, obj2, obj3 as properties
const obj4 = Object.assign({}, obj1, obj2, obj3) // this will merge obj1, obj2, obj3 into a new object
//console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3} // this will also merge obj1, obj2, obj3 into a new object using spread operator
//console.log(obj5)

// when values come from database or API
//Array of objects

const user = [

    {
        name: "Yash",
        email: "abc@gmail.com"
    },
    {
      name: "John",
        email: "john@gmail.com"
    },
    {
      name: "John",
        email: "john@gmail.com"
    }
]

user[1].email // accessing the email of the second user
//console.log (user[1].email); // access and print the email of the second user

//console.log(Object.keys(tinderUser)); // get the keys of the object
//console.log(Object.values(tinderUser)); // get the values of the object
//console.log(Object.entries(tinderUser)); // get the entries of the object (key-value pairs
//console.log(tinderUser.hasOwnProperty('id')) // check if the object has a property with the given key

const course = {

    courseName: "JavaScript",
    price: "999",
    courseStudent: "Yash"
}

console.log(course.courseStudent);
console.log(course['courseStudent']); 

// new syntex and distructuring

const {courseStudent} = course;
console.log(courseStudent);

const {courseStudent: studentName} = course; // renaming the variable while destructuring {courseStudent: studentName}
console.log(studentName); 

// API syntax

{
    "courseName": "JavaScript",

    "price": "999",

    "courseStudent": "Yash"
}

// also in array of objects formate 