class Circle {
  #radius = 0;
  static #count = 0;
  constructor(radius) {
    this.radius = radius;
    Circle.#count++;
    // or
    // this.constructor.#count++;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  set radius(value) {
    if (typeof value === "number" && value > 0) {
      this.#radius = value;
    } else {
      throw "The radius must be a positive number";
    }
  }
  get radius() {
    return this.#radius;
  }
  static hasRadius(circle) {
    return "radius" in circle;
  }
  static getCount() {
    return Circle.#count;
  }
}

let circle = new Circle(10);
console.log(Circle.hasRadius(circle));
console.log(circle.area); // 314.1592653589793

let circles = [new Circle(10), new Circle(20), new Circle(30)];

console.log(Circle.getCount());

/**
 * Private Methods
 */

class MyClass {
  #field;
  get #myField() {
    return this.#field;
  }
  set #myField(value) {
    thid.#field = value;
  }

  #privateMethod() {}

  static #privateStaticMethod() {}
}

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = Person.#validate(firstName);
    this.#lastName = Person.#validate(lastName);
  }
  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }
  static #validate(name) {
    if (typeof name === "string") {
      let str = name.trim();
      if (str.length >= 3) {
        return str;
      }
    }
    throw "The name must be a string with at least 3 characters";
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
}

let person = new Person("John", "Do");
console.log(person.getFullName());
