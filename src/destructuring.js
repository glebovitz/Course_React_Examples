// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philly',
//     temp: 88
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp } = person.location;

// if (city && temp)
//   console.log(`It's ${temp} in ${city}`)


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


// array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', 19147];

// const [, city, state = 'New York' ] = address;

// console.log (`you are in ${city} ${state}`);

const item = ['Coffee (ice)', '$2.00', '$3.50', '$3.75'];
const [drink, ,cost] = item;
console.log(`a medium ${drink} costs ${cost}`)