/**
 *
 * A closure is a function that references variables in the outer scope from its inner scope.
 * The closure preserves the outer scope inside its inner scope.
 */

function greeting(name) {
  // let message = "Hi";

  this.name = name;

  function sayHi() {
    console.log(this.name);
  }

  return sayHi;
}

let hi = greeting("Hi");

hi();

function greeting2(message) {
  return function (name) {
    return message + " " + name;
  };
}

let sayHi = greeting2("Hi");
let sayHello = greeting2("Hello");

console.log(sayHi("John")); // Hi John
console.log(sayHello("John")); // Hello John

// The code shows the same message
for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log("after " + index + " second(s):" + index);
  }, index * 1000);
}

/**
 * 1) Using the IIFE( immediately invoked function expression) solution
 */

for (var index1 = 1; index1 <= 3; index1++) {
  (function (index) {
    setTimeout(function () {
      console.log("1) after " + index + " second(s):" + index);
    }, index * 5000);
  })(index1);
}

/**
 * 2) Using let keyword in ES6
 */
for (let index3 = 1; index3 <= 3; index3++) {
  console.log("index 3:" + index3);
  setTimeout(function () {
    console.log("2) after " + index3 + " second(s):" + index3);
  }, index3 * 1000);
}
