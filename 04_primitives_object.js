// primitives data types
// There are 7 types of data types in javascript
// N N B B S S U
let a = null;
let b = 345;
let c = true; //it can be false
let d = BigInt("578") + BigInt("2");
let e = 'Rahul';
let f = Symbol("i'm a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);

console.log(typeof d);

// objects:- it is a non premetive data types. it is a key value pairs
const item = {
    "Name": "Rahul",
    "Roll": 59,
    "Village": "Matapara",
    "New": undefined,
    "Hobbies": null
};
console.log(item["Name"]);


