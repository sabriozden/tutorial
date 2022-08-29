//a callback is a function that you pass into another function as an argument for executing later
function filter(numbers) {
  let results = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers));

function isOdd(number) {
  return number % 2 != 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function filter2(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers2 = [1, 2, 4, 7, 3, 5, 6];
console.log(filter2(numbers, isOdd));
console.log(filter2(numbers, isEven));

//A callback can be an anonymous function
let oddNumbers = filter2(numbers, function (number) {
  return number % 2 != 0;
});

console.log(oddNumbers);

//In ES6, you can use an arrow function like this:
let oddNumbers2 = filter2(numbers, (number) => number % 2 != 0);

console.log(oddNumbers2);

/**
 * Synchronous callbacks
    A synchronous callback is executed during the execution of the high-order function that uses the callback. 
    The isOdd and isEven are examples of synchronous callbacks because they execute during the execution of the filter() function.
 */

/**
 * Asynchronous callbacks
   An asynchronous callback is executed after the execution of the high-order function that uses the callback.
   JavaScript is a single-threaded programming language. 
   It carries asynchronous operations via the callback queue and event loop.
 */

function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);
  }, 5000);
}

let url = "https://www.javascripttutorial.net/pic.jpg";
download(url, function (picture) {
  console.log(`Processing ${picture}`);
});

console.log("İşlem bitti");

/**
 * Handling errors
 */

function download2(url, success, failure) {
  setTimeout(() => {
    console.log(`Downloading the picture from ${url} ...`);
    console.log(!url);

    !url ? failure(url) : success(url);
  }, 1000);
}

download2(
  "",
  (url) => console.log(`Processing the picture ${url}`),
  (url) => console.log(`The '${url}' is not valid`)
);

download2(
  "undefined",
  (url) => console.log(`Processing the picture ${url}`),
  (url) => console.log(`The '${url}' is not valid`)
);

/**
 * Nesting callbacks and the Pyramid of Doom
 */

function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 1000);
}

const url1 = "https://www.javascripttutorial.net/pic1.jpg";
const url2 = "https://www.javascripttutorial.net/pic2.jpg";
const url3 = "https://www.javascripttutorial.net/pic3.jpg";

download(url1, function (url) {
  console.log(`Processing ${url}`);
  download(url2, function (url) {
    console.log(`Processing ${url}`);
    download(url3, function (url) {
      console.log(`Processing ${url}`);
    });
  });
});
