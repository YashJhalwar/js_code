console.log(typeof foo); // ✅ function

function foo() {
  return "bar";
}

var foo = 10;
console.log(foo); // ✅ 10

// The function foo() is hoisted first.

// Then var foo = 10 is hoisted and overrides it.

// So typeof foo at the top = "function" (function hoisting worked).

// But by the bottom, it's overridden to 10.

function outer() {
  inner(); // ✅ Works!

  function inner() {
    console.log("🧠 Inner is hoisted inside outer");
  }
}

outer();

// ✅ Hoisting Explanation:
// inner() is hoisted to the top of outer()'s local scope.

// Works just like a top-level function, but inside another function.

// 🔹 2. Function Expression Inside Function (var)-------------------------------------

function outer() {
  greet(); // ❌ TypeError: greet is not a function

  var greet = function () {
    console.log("👋 Hello");
  };
}

outer();
// ⚠️ Hoisting Explanation:
// var greet is hoisted as:
// var greet; // undefined
// So greet() becomes undefined() at runtime → ❌ TypeError

// 🔹 3. Function Expression Inside Function (let)

function outer() {
  greet(); // ❌ ReferenceError

  let greet = function () {
    console.log("👋 Hello");
  };
}

outer();
// ❌ Hoisting Explanation:
// let greet is hoisted but in TDZ

// Can’t access before it's initialized → ReferenceError

// 🔹 4. Function Returned from Function

function outer() {
  return function inner() {
    console.log("🚀 Returned Function");
  };
}

const fn = outer(); // ✅ outer is hoisted
fn();               // ✅ returned function is now callable

// ✅ Hoisting Explanation:
// outer() is a hoisted function declaration

// inner() is created only when outer() runs

// It is not hoisted outside, but available in returned value


// 🔹 5. Function as Callback (Passed as Argument)

function execute(callback) {
  callback(); // ✅ This will run the passed function
}

execute(function () {
  console.log("🎯 Callback ran");
});

// ✅ Hoisting Explanation:
// No hoisting here — it’s a function expression, passed directly

// It's created at the moment it's passed, and used inside

// 🔹 6. Arrow Function with var

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = () => {
  console.log("Hi");
};
// ⚠️ Hoisting Explanation:
// var sayHi is hoisted = undefined

// Arrow function is not hoisted — you try to call undefined() → ❌

// 🔹 7. Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("⚡ IIFE runs immediately!");
})();

// ✅ Hoisting Explanation:
// IIFE is not hoisted — it is executed immediately when parsed

// If you try to call it before defining, you'll get an error