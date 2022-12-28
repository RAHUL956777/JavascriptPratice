// let a = prompt("Whats your age");
// a = Number.parseInt(a); //converting the string to a number
let age = prompt("Enter your age");
if (age => 18) {
    console.log("You can drive");
} else if (age >= 9) {
    console.log("You cannot think about drive");
} else if (age >= 17) {
    console.log("you can think about drive");
}
else {
    console.log("You cannot drive");
}
