function add(x, y) {
  return x + y;
}

console.log(add instanceof Function); // true

let result = add.call(this, 10, 20);
console.log(result); // 30

var greeting = "Hi";

var messenger = {
  greeting: "Hello",
};

function say(name) {
  console.log(this.greeting + " " + name);
}

console.log(this.greeting);

say.call(this, "John");

say.call(this.messenger, "Jane");

say("John");

/***
 * Using the JavaScript call() method to chain constructors for an object
 */

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget("red", 100, 200);

console.log(widget);

/**
 * Using the JavaScript call() method for function borrowing
 */

const car = {
  name: "car",
  start() {
    console.log("Start the " + this.name);
  },
  speedUp() {
    console.log("Speed up the " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly() {
    console.log("Fly");
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();

function isOdd(number) {
  return number % 2;
}

function getOddNumbers() {
  return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);

console.log(Array.prototype.filter.call([10, 1, 3, 4, 8, 9], isOdd));
console.log(results);
