// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;


// console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName && fullName.split(' ')[0];
};

console.log("getFirstName", getFirstName('Tommy Jones'));

const getFirstName2 = (fullName) => fullName && fullName.split(' ')[0];

console.log("getFirstName2", getFirstName2('Jimmy Jones'));
