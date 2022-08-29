class Person {
  constructor(name) {
    this.name = name;
  }

  static [Symbol.hasInstance]() {
    return false;
  }
}

let p1 = new Person("John");

console.log(p1 instanceof Person);

console.log(Person[Symbol.hasInstance](p1));

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let e1 = new Employee();

console.log(e1 instanceof Employee); // true
console.log(e1 instanceof Person); // true
console.log(e1 instanceof Object); // true

/* Since the Symbol.hasInstance is defined on the Function prototype, it’s automatically available by default in all functions and classes

And you can redefine the Symbol.hasInstance on a subclass as a static method. For example: */

class Android extends Person {
  //   static [Symbol.hasInstance]() {
  //     return false;
  //   }
}

let a1 = new Android("Sonny");

console.log(a1 instanceof Android); // false
console.log(a1 instanceof Person); // false
