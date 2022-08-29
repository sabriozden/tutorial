function createMachine(name, status) {
  return {
    name,
    status,
  };
}

let name = "Computer",
  status = "On";

let machine = {
  name,
  status,
};

let name2 = "machine name";
let machine2 = {
  [name2]: "server",
  "machine hours": 10000,
};

console.log(machine2[name2]); // server
console.log(machine2["machine hours"]);

let prefix = "machine";
let machine3 = {
  [prefix + " name"]: "server3",
  [prefix + " hours"]: 100003,
};

console.log(machine3["machine name"]); // server
console.log(machine3["machine hours"]);

/**
 * Concise method syntax
 */

let server = {
  name: "Server",
  restart: function () {
    console.log("The" + this.name + " is restarting...");
  },
  restart2() {
    console.log("The" + this.name + " is restarting 2...");
  },
  "starting up"() {
    console.log("The " + this.name + " is starting up!");
  },
};

server["starting up"]();
server.restart2();
