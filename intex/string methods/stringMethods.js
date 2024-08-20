// concat

const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2);
console.log(result); 

// includes

const sentence = "JavaScript is fun";
const hasFun = sentence.includes("fun");
console.log(hasFun);

// indexOf

let text1 = "Hello world, welcome to the universe.";
let index = text1.indexOf("welcome");
console.log(index);



// lastIndexOf

const text2 = "Hello, World!";
const lastIndex = text2.lastIndexOf('o');
console.log(lastIndex); 

// padEnd

const text3 = "Hello";
const paddedText = text3.padEnd(10);
console.log(paddedText);
const paddedTextWithExclamation = text3.padEnd(10, '!');
console.log(paddedTextWithExclamation);

// padStart

const text4 = "123";
const paddedText1 = text4.padStart(5, '0');

console.log(paddedText1); 

// repeat

const text5 = "Hello";
const repeatedText = text5.repeat(3);

console.log(repeatedText); 

// replace

const text6 = "Hello, World!";
const newText = text6.replace("World", "JavaScript");
console.log(newText);

// search

const text7 = "Hello, World!";
const index1 = text7.search("World");
console.log(index1); 

// slice

const text8 = "Hello, World!";
const slicedText = text8.slice(0, 5);
console.log(slicedText); 

// split

const text9 = "Hello, World!";
const parts = text9.split(", ");
console.log(parts); 

// startsWith

const text10 = "Hello, World!";

const startsWithHello = text10.startsWith("Hello");

console.log(startsWithHello); 
const startsWithWorld = text10.startsWith("World", 7);
console.log(startsWithWorld); 

// substr

const text11 = "Hello, World!";
const substring11 = text11.substring(0, 5);
console.log(substring11); 
const substring12 = text11.substring(7);
console.log(substring12);

// substring
const text12 = "Hello, World!";
const substring1 = text12.substring(0, 5);
console.log(substring1);
const substring2 = text12.substring(7);
console.log(substring2); 

// toLowerCase

const text13 = "Hello, WORLD!";
const lowerCaseText = text13.toLowerCase();
console.log(lowerCaseText);

// toUpperCase

const text14 = "Hello, World!";
const upperCaseText = text14.toUpperCase();
console.log(upperCaseText);

// trim

const text15 = "   Hello, World!   ";
const trimmedText = text15.trim();
console.log(trimmedText); 

// trimEnd (or trimRight)

const text16 = "   Hello, World!   ";
const trimmedEndText = text16.trimEnd();
console.log(trimmedEndText); 

// trimStart (or trimLeft)

const text17 = "   Hello, World!   ";
const trimmedStartText = text17.trimStart();
console.log(trimmedStartText);

// charAt

const text18 = "Hello, World!";
const charAtIndex1 = text18.charAt(1);
console.log(charAtIndex1);

// charCodeAt

const text19 = "Hello, World!";
const charCode = text19.charCodeAt(1);
console.log(charCode);

