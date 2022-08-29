const person = {
  firstName: "John",
  lastName: "Doe",
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}

let result = greet.apply(person, ["Hello", "How are you?"]);

console.log(result);

let result2 = greet.call(person, "Hello", "How are you?");

console.log(result2);

/**
 * Function borrowing
 */

const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};

const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};

console.log(computer.turnOn.apply(server));
console.log(computer.turnOff.apply(server));

/**
 * Using the apply() method to append an array to another
 */

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);
console.log(arr);
