let person = {
  firstName: "John",
  lastName: "Doe",
  currentAge: 28,
};

let { firstName, lastName, middleName } = person;

console.log(firstName);
console.log(lastName);
console.log(middleName); // undefined

({ firstName, lastName, middleName = "", currentAge: age = 18 } = person);

console.log(firstName);
console.log(lastName);
console.log(middleName);
console.log(age);

function getPerson() {
  return null;
}

({ firstName, lastName } = getPerson() || {});

console.log(firstName, lastName);

let employee = {
  id: 1001,
  name: {
    firstName: "John2",
    lastName: "Doe2",
  },
};

({
  name: { firstName, lastName },
  name,
} = employee);

console.log(firstName); // John2
console.log(lastName); // Doe2
console.log(name);

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
display(person);

let display2 = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);
display2(person);
