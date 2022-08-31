function getUser(id) {
  if (id <= 0) {
    return null;
  }

  // get the user from database
  // and return null if id does not exist
  // ...

  // if user was found, return the user
  return {
    id: id,
    username: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}

let user = getUser(2);
let profile = user && user.profile;
console.log(profile);

profile = user?.profile;
console.log(profile);

let user2 = getUser(-1);
let avatar = user2?.profile?.avatar;

console.log(avatar);

let defaultProfile = { default: "/default.png", language: "English" };

let user3 = getUser(-2);
let profile3 = user3?.profile ?? defaultProfile;

console.log(profile3);

/**
 * Using optional chaining operator with function calls
 */

let file = {
  read() {
    return "file content";
  },
  write(content) {
    console.log(`Writing ${content} to file...`);
    return true;
  },
};

let compressedData = file.compress?.();
console.log(compressedData);

function getUserCallback(id, callback) {
  // get user
  // ...

  let user = {
    id: id,
    username: "admin",
  };

  // test if the callback exists
  callback?.(user);

  return user;
}

function test(user) {
  console.log("test=> ");
  console.log(user);
}

let usercallback = getUserCallback(10, file.write);

console.log(usercallback);

usercallback = getUserCallback(15, test);

console.log(usercallback);
