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

public class Main {
    public static void main(String[] args) {
        String text = "Hello, World!";
        int index = text.indexOf('o');
        System.out.println("Index of 'o': " + index); // Output: 4
    }
}

// lastIndexOf

const text = "Hello, World!";
const lastIndex = text.lastIndexOf('o');
console.log(lastIndex); 

// padEnd

const text = "Hello";
const paddedText = text.padEnd(10);
console.log(paddedText);
const paddedTextWithExclamation = text.padEnd(10, '!');
console.log(paddedTextWithExclamation);

// padStart

const text = "123";
const paddedText = text.padStart(5, '0');

console.log(paddedText); 

// repeat

const text = "Hello";
const repeatedText = text.repeat(3);

console.log(repeatedText); 

// replace

const text = "Hello, World!";
const newText = text.replace("World", "JavaScript");
console.log(newText);

// search

const text = "Hello, World!";
const index = text.search("World");
console.log(index); 

// slice

const text = "Hello, World!";
const slicedText = text.slice(0, 5);
console.log(slicedText); 

// split

const text = "Hello, World!";
const parts = text.split(", ");
console.log(parts); 

// startsWith

const text = "Hello, World!";

const startsWithHello = text.startsWith("Hello");

console.log(startsWithHello); 
const startsWithWorld = text.startsWith("World", 7);
console.log(startsWithWorld); 

// substr

const text = "Hello, World!";
const substring1 = text.substring(0, 5);
console.log(substring1); 
const substring2 = text.substring(7);
console.log(substring2);

// substring
const text = "Hello, World!";
const substring1 = text.substring(0, 5);
console.log(substring1);
const substring2 = text.substring(7);
console.log(substring2); 

// toLowerCase

const text = "Hello, WORLD!";
const lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);

// toUpperCase

const text = "Hello, World!";
const upperCaseText = text.toUpperCase();
console.log(upperCaseText);

// trim

const text = "   Hello, World!   ";
const trimmedText = text.trim();
console.log(trimmedText); 

// trimEnd (or trimRight)

const text = "   Hello, World!   ";
const trimmedEndText = text.trimEnd();
console.log(trimmedEndText); 

// trimStart (or trimLeft)

const text = "   Hello, World!   ";
const trimmedStartText = text.trimStart();
console.log(trimmedStartText);

// charAt

const text = "Hello, World!";
const charAtIndex1 = text.charAt(1);
console.log(charAtIndex1);

// charCodeAt

const text = "Hello, World!";
const charCode = text.charCodeAt(1);
console.log(charCode);

