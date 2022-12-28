// ushing logical operator you need to find any mans age is relai between
// 10 to 20

let age = prompt("Enter your age: ");
if (age => 10 && age <= 20) {
    console.log("Your age lies between 10 and 20 ." + "your age is : " + age);
} else {
    console.log("Your age is not lies between 10 to 20 ." + "your age is : " + age);
}

// demonstrate switch case  statement in javascript
let cal = prompt("Enter what do you want...");
console.log("Press + for addition");
console.log("Press - for substraction");
console.log("Press * for multiplication");
console.log("Press / for division");

switch (cal) {
    case "+":
        let a = prompt("enter first number for addition");
        let b = prompt("enter second number for addition");
        let add = a + b;
        console.log("The addition of two number is: ", add);
        break;

    case "-":
        let c = prompt("enter first number for substraction");
        let d = prompt("enter second number for substraction");
        console.log("The substraction of two number is: ", c - d);
        break;

    case "*":
        let e = prompt("enter first number for multiplication");
        let f = prompt("enter second number for multiplication");
        console.log("The multiplication of two number is: ", e * f);
        break;

    case "/":
        let g = prompt("enter first number for division");
        let h = prompt("enter second number for division");
        console.log("The division of two number is: ", g / h);
        break;

    default:
        console.log("Enter a valid choice");
        break;
}


// write a program that is divisible by 2 and also 3
let i = prompt("Enter the number which you want to check: ");
if (i / 2 == 0 && i / 3 == 0) {
    console.log("The numbe you entered is divisible by 2 and 3");
} else {
    console.log("The number you entered is not divisible by 2 and 3");
}

// write a program that is divisible by 2 or 3
let j = prompt("Enter the number which you want to check: ");
if (j / 2 == 0 || j / 3 == 0) {
    console.log("The numbe you entered is divisible by 2 or 3");
} else {
    console.log("The number you entered is not divisible by 2 or 3");
}
// print your can drive or you cannot drive based on age being start than 18 ushing turnary operator
let k = prompt('Enter your valid age: ');
k >= 18 ? (console.log("You can drive")) : (console.log("You cannot drive"));

