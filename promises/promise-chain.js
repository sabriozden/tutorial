// you want to execute two or more related asynchronous operations,
// where the next operation starts with the result from the previous step

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 1000);
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
})
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
    return result * 4;
  });

/**
 * Returning a Promise
 */

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p2.then((result) => {
  console.log("promise 1:" + result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3 * 1000);
  });
})
  .then((result) => {
    console.log("promise 1:" + result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 1000);
    });
  })
  .then((result) => console.log("promise 1:" + result));

// The following modified the above example:
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 1000);
  });
}

generateNumber(10)
  .then((result) => {
    console.log("promise 2:" + result);
    return generateNumber(result * 2);
  })
  .then((result) => {
    console.log("promise 2:" + result);
    return generateNumber(result * 3);
  })
  .then((result) => console.log("promise 2:" + result));

/**
 * Promise chaining syntax
 */

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get the user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 10 * 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 10 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 10 * 1000);
  });
}

getUser(100).then(getServices).then(getServiceCost).then(console.log);
