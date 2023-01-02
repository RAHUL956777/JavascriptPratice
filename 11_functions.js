// we use function those time when we continiously changes the same code
function onePlusAvg(x, y) {
    console.log("Done 🥰");
    return Math.round(1 + (x + y) / 2);
}

let a = 1;
let b = 2;
let c = 3;
console.log("one plus average of a and b is: ", onePlusAvg(a, b));
console.log("one plus average of b and c is: ", onePlusAvg(b, c));
console.log("one plus average of a and c is: ", onePlusAvg(a, c));

const add = (A, B) => {
    return A + B;
}
console.log(add(10, 20));

// Write a JS code to find N value in the Fibonacci series for a given number
function findFibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var count = 2;
    var n3;
    while (true) {
        n3 = n1 + n2;
        if (n3 == num) {
            console.log(`Element ${num} is present in index ${count}`)
            break;
        }
        else if (n3 > num) {
            console.log("Element not present");
            break;
        }
        n1 = n2;
        n2 = n3;
        count++;
    }
}

findFibonacci(13) //"Element 13 is present in index 7"
// findFibonacci(144) //"Element 144 is present in index 12"

