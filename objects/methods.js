/**
 * hasOwnProperty
 */

const person = {
  firstName: "John",
  lastName: "Doe",
};

const employee = Object.create(person, {
  job: {
    value: "JS Developer",
    enumerable: true,
  },
});

console.log(employee.hasOwnProperty("job")); // => true
console.log(employee.hasOwnProperty("firstName")); // => false
console.log(employee.hasOwnProperty("lastName")); // => false
console.log(employee.hasOwnProperty("ssn")); // => false

/**
 * values
 */

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

for (const key in person2) {
  if (person2.hasOwnProperty(key)) {
    const value = person2[key];
    console.log(value);
  }
}

const profile = Object.values(person2);
console.log(profile);

/**
 * entries
 */

const ssn = Symbol("ssn");

const car = {
  name: "Sabri",
  lastname: "özden",
};

const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  [ssn]: "123-345-789",
  car: car,
};

const kv = Object.entries(person3);

for (const key in person3) {
  if (person3.hasOwnProperty(key)) {
    const value = person3[key];
    console.log(key + ":" + value);
  }
}

console.log(kv);

/**
 * assign
 */

let box = {
  height: 10,
  width: 20,
};

let style = {
  color: "Red",
  borderStyle: "solid",
  width: 50,
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);
