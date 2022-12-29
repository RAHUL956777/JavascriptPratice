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