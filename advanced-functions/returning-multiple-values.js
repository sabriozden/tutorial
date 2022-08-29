

function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}

let names = getNames();

const [firstName1,lastName1] = getNames();

console.log(firstName1);
console.log(lastName1);


function getNames2() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';
  
    // return values
    return {
      'firstName': firstName,
      'lastName': lastName
    };

    // names of the properties are the same as the variables
    //return { firstName, lastName };
  }

  const {firstName,lastName} = getNames2();

console.log(firstName);
console.log(lastName);