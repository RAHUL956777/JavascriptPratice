//String length property 
let n = "Rahul";
console.log(n.length);

// escape sequence
let na = "Rahul\"";//it's length is 6 because it's a escape sequence
console.log(na.length);

// toUppercase and toLowercase method
console.log(n.toLocaleUpperCase());
console.log(n.toLocaleLowerCase());

// slice method
let nam = "rahul";
console.log(nam.slice(2, 4));
console.log(nam.slice(1));

// replace method
console.log(nam.replace("rahul", "Babu"));

// string concatination
let name1 = "Rahul";
let name2 = " Das";
let name3 = name1.concat(name2);
console.log(name3);
let name4 = name1 + name2;
console.log(name4);

// removing extra spacess from a string
let newName = "      rahul             ";//Trim method remove extra spacess from beagining and from last.. it doesn't remove the space between a string
console.log(newName.trim());

// we can use a string like an object
const string4 = new String("A String object");
console.log(string4);

// Character access
// there are two types of method that helps us to access an ch
