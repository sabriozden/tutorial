let person = {
  name: "John Doe",
  getName: function () {
    //console.log(this);
    console.log(this.name);
  },
};

setTimeout(person.getName, 1000);

let f = person.getName;

setTimeout(f, 1000);
setTimeout(function () {
  person.getName();
}, 1000);

let f2 = person.getName.bind(person);
setTimeout(f2, 1000);

/**
 * Using bind() to borrow methods from a different object
 */

let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};

runner.run.bind(flyer, 20)();
