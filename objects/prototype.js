function Person(name) {
  this.name = name;

  this.greet2 = function () {
    return "Hi, there!";
  };
}

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + "!";
};

let p1 = new Person("Sabri");
p1.name = "Derya";

// console.log(Person);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);

// console.log(p1.greet());
// console.log(p1.greet2());
// console.log(p1.toString());

for (const key in p1) {
  console.log(key + ": " + p1[key]);
}
