// we use loops to perform repeted action
for (let a = 0; a < 9; a++) {
    console.log(a);
}

// program to display the sum of n natural numbers
let sum = 0;
const n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for (let i = n; i >= 1; i--) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:', sum);

/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for (let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
