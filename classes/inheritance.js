class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }

  static helloWord() {
    console.log("Hello world !!!");
  }
}

class Bird extends Animal {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }
  fly() {
    console.log("flying " + this.legs);
  }

  getColor() {
    return this.color;
  }

  walk() {
    console.log(`go walking`);
    super.walk();
  }
}

// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log("flying");
//   }
// }

let bird = new Bird(2, "Kırmızı");

bird.walk();
bird.fly();
console.log(bird.getColor());

Bird.helloWord();

class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }
  dequeue() {
    return super.shift();
  }
  peek() {
    return !this.empty() ? this[0] : undefined;
  }

  empty() {
    return this.length === 0;
  }
}

let customers = new Queue();
customers.enqueue("A");
customers.enqueue("B");
customers.enqueue("C");
customers.enqueue("D");
customers.enqueue("E");

console.log(customers.length);
console.log(customers.dequeue());

console.log(customers.empty());

while (!customers.empty()) {
  console.log(customers.dequeue());
}
