//1) Simple function invocation

function show() {
    console.log(this === window); // true
 }
 
 show();

 window.show();

"use strict";

function show2() {
    console.log(this === undefined);
}

show2();

//2) Method invocation

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson',
    test: function () {
        console.log("Test");
    }

}

let brand2 = car.getBrand;
console.log(brand2());


//To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value

let brand1 = car.getBrand.bind(car);
console.log(brand1());

let brand = car.getBrand.bind(bike);
console.log(brand());

//3) Constructor invocation

function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let honda = new Car('Honda3');
console.log(honda.getBrand());


let bmw = Car('BMW');
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined

function Car2(brand) {
    if (!(this instanceof Car2)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
let bmw2 = Car2('BMW');
// or

// with ES6 
function Car3(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}

let bmw3 = Car3('BMW');

//4) Indirect Invocation
function getBrand(prefix,model) {
    console.log(prefix + this.brand + " " + model);
}

let honda4 = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda4, "It's a ","1995");
getBrand.call(audi, "It's an ","1996");

getBrand.apply(honda4, ["It's a ",1195]); // "It's a Honda"
getBrand.apply(audi, ["It's an ",1995]); // "It's a Audi"


const canFetch = typeof globalThis.fetch === 'function';

console.log(typeof globalThis.fetch);

console.log(canFetch);