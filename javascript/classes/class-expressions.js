let Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};

let person = new Person("John Doe");
console.log(typeof Person); // function

/**
 * First-class citizen
 */

function factory(aClass, parameters) {
  return new aClass(parameters);
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

greeting.sayHi(); // 'Hi'

let factoryPerson1 = factory(Person, "Sabri Özden");
console.log(factoryPerson1.name);

/**
 * Singleton
 */

let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name}...`);
  }
})("Awesome App");

app.start(); // Starting the Awesome App...
