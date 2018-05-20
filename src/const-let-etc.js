const nameconst = 'Andrew';
const nameconst = 'Mike';

console.log('nameconst', nameconst);

let nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName () {
    const petName = 'Hal';
    return petName;
}

getPetName();

// Block scoping

const fullName = 'Gregg Lebovitz';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log (firstName);
