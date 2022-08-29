/**
 * An arrow function doesn’t have its own this value and the arguments object.
 * Therefore, you should not use it as an event handler, a method of an object literal, a prototype method,
 * or when you have a function that uses the arguments object.
 */

//1) Event handlers

// const greeting = document.querySelector("#greeting");
// const username = document.querySelector("#username");

// username.addEventListener("keyup", () => {
//   greeting.textContent = "Hello " + this.value; // undefined
// });

// username.addEventListener("keyup", function () {
//   greeting.textContent = "Hello " + this.value;
// });

//2) Object methods
const counter2 = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count,
};
console.log(counter2.next()); //NaN expected 1

//To fix this
const counter = {
  count: 0,
  next() {
    return ++this.count;
  },
  current() {
    return this.count;
  },
};

console.log(counter.next());

//3) Prototype methods

function Counter3() {
  this.count = 0;
}

Counter3.prototype.next = () => {
  return ++this.count;
};

Counter3.prototype.current = () => {
  return this.count;
};

let cnt = new Counter3();
console.log(cnt.next());

function Counter31() {
  this.count = 0;
}

Counter31.prototype.next = function () {
  return ++this.count;
};

Counter31.prototype.current = function () {
  return this.count;
};

let cnt2 = new Counter31();
console.log(cnt2.next());

//4) Functions that use the arguments object

const concat = (separator) => {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
};

function concat2(separator) {
  console.log(arguments);

  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

console.log(concat2(",", [2, 3, 5]));
