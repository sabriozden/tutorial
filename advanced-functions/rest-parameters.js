function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum(1, 2, 3));

function sum2(...args) {
  console.log(typeof arguments);

  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      console.log("prev: " + prev + " curr:" + curr);
      return prev + curr;
    });
}

console.log(sum2(10, "Hi", null, undefined, 20));

//the arguments object itself is not an instance of the Array type
function sum3() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

console.log(sum3(103, "Hi", null, undefined, 20));

//An arrow function does not have the arguments object.
//Therefore, if you want to pass some arguments to the arrow function,
//you must use the rest parameters.
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("JavaScript", "Rest", "Parameters"); // =>
console.log(message); // JavaScript Rest Parameters

/**
 * JavaScript rest parameter in a dynamic function
 * JavaScript allows you to create dynamic functions through the Function constructor
 */

var showNumbers = new Function("...numbers", "console.log(numbers)");
showNumbers(1, 2, 3);
