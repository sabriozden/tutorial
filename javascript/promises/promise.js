//The code in the findUser() function is synchronous and blocking
function getUsers() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);
  return users;
}

function findUser(username) {
  const users = getUsers(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log(findUser("john"));

//Using callbacks to deal with an asynchronous operation

function getUsers2(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}

function findUser2(username, callback) {
  getUsers2((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser2("john", console.log);

/**
 * Consuming a Promise: then, catch, finally
 *
 * 1) The then() method  promise.then(onFulfilled,onRejected);
 */

let success = false;

const render = () => {
  console.log("rendered");
};

function getUsers3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers3();
promise.then(onFulfilled, onRejected);

promise.then(
  (users) => console.log(users),
  (error) => console.log(error)
);

promise.catch((error) => {
  console.log(error);
});

promise
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });
