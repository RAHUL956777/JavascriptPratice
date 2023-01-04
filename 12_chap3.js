// 1. write a program to print a numer from objct
let marks = {
    rahul: 90,
    ritam: 20,
    sayantan: 99,
    new: 4
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Another way to print object ushing for in loop
for (let key in marks) {
    console.log("The marks of " + " are " + marks[key]);
}

// write a program to print "try again" until user entre the correct number
let cn = 4;
let i;
while (i != cn) {
    i = prompt("Enter a number: ");
} console.log("You have entered a correct number");
