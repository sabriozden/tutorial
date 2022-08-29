/**
 * apply and call
 */

let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "Woof" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};

say.apply(cat, ["What does a cat say?"]);
say.apply(dog, ["What does a dog say?"]);

say.call(cat, "What does a cat say 2 ?");
say.call(dog, "What does a dog say 2 ?");

/**
 * bind
 *
 * The bind() method creates a new function instance whose this value is bound to the object that you provide
 */

let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};

let aircraft = {
  speed: 10,
  fly: function () {
    console.log("Flying");
  },
};
let taxiing = car.start.bind(aircraft);
taxiing();

car.start.call(aircraft);
