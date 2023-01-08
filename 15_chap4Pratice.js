// what will the following print in javascript
console.log("har\"".length);

// explore the  includes, startwith & ends with function of a string

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// startWith
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false


// enedswith
const str5 = 'Cats are the best!';

console.log(str5.endsWith('best!'));
// expected output: true

console.log(str5.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false

// mack  string to lowercase
let va = "welcome to india";
console.log(va.toLowerCase());

// find 1000 from the string
let srt = "please give Rs 1000";
let ammount = srt.slice(15);
console.log(ammount);
console.log(typeof ammount);

let ammount1 = Number.parseInt(srt.slice(15));
console.log(typeof ammount1);

// try to change 4th character of a given string where you able to do it
// no we cannot do it because string are immutable
let friends = "jai sri ram";
friends[3] = "S";
console.log(friends);
