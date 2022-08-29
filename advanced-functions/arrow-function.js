//function expression
let add = function (x, y) {
  return x + y;
};

console.log(add(10, 20));

//arrow function

// => expression is equivalent => { return expression; }

// one expression
let add2 = (x, y) => x + y;

//block syntax (use return keyword)
let add3 = (x, y) => {
  console.log("Block syntax");
  return x + y;
};

console.log(add2(10, 20)); // 30;

console.log(add3(10, 20)); // 30;

let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [6,4,2]

let numbers2 = [4, 2, 6];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

/**
 * JavaScript arrow functions with a single parameter
 *  (p1) => { statements }  is equivalent p => { statements }
 *
 */

(p1) => {
  statements;
};

let names = ["John", "Mac", "Peter"];
let lengths = names.map((name) => name.length);

console.log(lengths);

/**
 * JavaScript arrow functions and object literal
 * p => {object:literal}
 */

let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("Red");
console.log(backgroundColor.value); // "Red"

let setColor2 = (color) => ({
  value: color,
});

console.log(setColor2("Kirmizi")); // "Red"

/**
 * JavaScript arrow functions and this value
 *
 * Inside the anonymous function of the setTimeout() function, the this.speed is undefined.
 * The reason is that the this of the anonymous function shadows the this of the speedUp() method.
 *
 */
function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    //console.log(this);

    setTimeout(function () {
      //console.log(this);
      //console.log(self);
      console.log(this.speed); // undefined

      console.log(self.speed);
    }, 1000);
  };
}

//Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context.

let car1 = new Car();
car1.speedUp(50);

function Car2() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car2 = new Car2();
car2.speedUp(50); // 50;

//JavaScript arrow functions and the arguments object

function show() {
  return (x) => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15

/**
 * Summary
    Use the (...args) => expression; to define an arrow function.
    Use the (...args) => { statements } to define an arrow function that has multiple statements.
    An arrow function doesn’t have its binding to this or super.
    An arrow function doesn’t have arguments object, new.target keyword, and prototype property.
 */
