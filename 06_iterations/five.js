//for each loop higher order function

const myArr = ["val1", "val2", "val3"];

myArr.forEach( function(item){
    //as a parameter mil gaya hai item to yaha use karo
      // console.log(item);

});

// yein function automatic exicute hoga aur har bar (value) ko le kar aayega 
// function hai to smart hai oose pata hai array par laag raha hu function() //nam to nahi likhte na callback mein

// ------you can also use arrow function-------

myArr.forEach((item)=> {
  // console.log(item);
});

myArr.forEach(item=> {
  // console.log(item);
});

// ------function----------

// function printItem (item){
//   console.log(item);
// }

// myArr.forEach(printItem)

// myArr.forEach((item, index, arr) => {
//      console.log(item, index, arr)
// })

const myObjArray = [
  {
    languageName : "Java script",
    languageFileName: "js"
  },
  {
    languageName : "CPP",
    languageFileName: "C++"
  },
  {
    languageName : "Java",
    languageFileName: "java"
  }
]

myObjArray.forEach((item) => {

  console.log(item.languageName);
})
