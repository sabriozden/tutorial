let sum = function (a, b) {
  return a + b;
};
console.log(sum(5, 150));

// IIFE
let sum2 = (function (a, b) {
  return a + b;
})(10, 20);

console.log(sum2);

//Note that you can use an arrow function to define an IIFE:

(() => {
  console.log("IIFE arrow function");
})();

let sum3 = (function (a, b) {
  return a + b;
})(10, 20);

console.log(sum3);

(function () {
  var counter = 0;

  function add(a, b) {
    return a + b;
  }

  console.log(add(10, 25)); // 30
}());

//Named IIFE
(function namedIIFE() {
  //...
})();

//IIFE starting with a semicolon (;)
(function () {
  /* */
})();

//IIFE in actions

const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }
  return {
    add: add,
    multiply: multiply,
  };
}());

let result = calculator.add(10, 20);

console.log("calculator: "+ result);