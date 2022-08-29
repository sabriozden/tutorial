function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

class Person1 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Person2 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

let person2 = new Person2("Jane Doe");

console.log(person2.name);
console.log(person2._name);

person2.name = "Jane Smith";
console.log(person2.name);

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("John").add("Jane").add("Peter");
console.log(`The latest attendee is ${meeting.latest}.`);
