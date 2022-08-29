/**
 * Static methods
 */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

/**
 * The following adds a static method called createAnonymous() to the Person type:
 */
Person.createAnonymous = function (gender) {
  let name = gender == "male" ? "John Doe" : "Jane Doe";
  return new Person(name);
};

/**
 * JavaScript static methods in ES6
 */

class Person2 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static createAnonymous(gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}

let anonymous = Person.createAnonymous("male");

/**
 * Static Properties
 */

class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log("Item Count:" + Item.getCount());

class Item2 {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item2.count;
  }
}

let pen = new Item2("Pen", 5);
let notebook = new Item2("notebook", 10);

console.log("Item2 Count:" + Item2.getCount());

let notebook2 = new Item2("notebook", 10);

console.log("Item2 Count:" + Item2.getCount());
