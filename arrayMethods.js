// concat

function func() {
    let num1 = [11, 12, 13],
        num2 = [14, 15, 16],
        num3 = [17, 18, 19];
    console.log(num1.concat(num2, num3));
}
func();
// every

const numberz = [2, 4, 6, 8, 10];
const allEven = numberz.every(num => num % 2 === 0);
console.log(allEven);

// Fill

let arr = new Array(5);
arr.fill(0);
console.log(arr); 

// Find

let numbrs = [5, 12, 8, 130, 44];
let found = numbrs.find(element => element > 10);
console.log(found);

// findIndex

let numbers = [5, 12, 8, 130, 44];
let index = numbers.findIndex(element => element > 10);
console.log(index);

// flat

let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flattenedArray1 = nestedArray.flat();
console.log(flattenedArray1);
let flattenedArray2 = nestedArray.flat(2);
console.log(flattenedArray2);

// includes

let fruits = ["Apple", "Banana", "Mango"];
let hasBanana = fruits.includes("Banana");
console.log(hasBanana);
let hasGrapes = fruits.includes("Grapes");
console.log(hasGrapes);

// indexOf

let languages = ["Java", "JavaScript", "Python", "JavaScript"];

let intex = languages.indexOf("JavaScript");
console.log(index);

let notFound = languages.indexOf("Ruby");
console.log(notFound);

// join

let fruitz = ["Apple", "Banana", "Mango"];

let fruitString = fruitz.join(", ");
console.log(fruitString); 

let fruitStringAnd = fruits.join(" and ");
console.log(fruitStringAnd); 

// lastIndexOf

let languagez = ["Java", "JavaScript", "Python", "JavaScript"];

let lastIndex = languagez.lastIndexOf("JavaScript");
console.log(lastIndex); 

// pop

let fruit = ["Apple", "Banana", "Cherry"];

let lastFruit = fruit.pop();

console.log(lastFruit); 
console.log(fruit);    

// push

let fruit1 = ["Apple", "Banana"];

let newLength = fruit1.push("Orange");
console.log(fruit1); 
console.log(newLength); 

newLength = fruit1.push("Mango", "Pineapple");
console.log(fruit1); 
console.log(newLength); 

// Reverse

let number1 = [1, 2, 3, 4, 5];
number1.reverse();
console.log(number1);

// unshift

let fruit2 = ["Banana", "Orange", "Apple"];

let newLength1 = fruit2.unshift("Mango");
console.log(fruits); 
console.log(newLength1); 

newLength = fruit2.unshift("Pineapple", "Lemon");
console.log(fruit2); 
console.log(newLength);

// shift

let fruit3 = ["Apple", "Banana", "Cherry"];

let firstFruit = fruit3.shift();

console.log(firstFruit); 
console.log(fruit3);   

// slice

let fruit4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruit4.slice(1, 3);
console.log(citrus); 

// Some

let number5 = [1, 3, 5, 7, 9];

let hasEvenNumber = number5.some(num => num % 2 === 0);
console.log(hasEvenNumber); 
let mixedNumbers = [1, 2, 3, 4, 5];
hasEvenNumber = mixedNumbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); 

// every

let number6 = [2, 4, 6, 8, 10];
let allEven1 = number6.every(num => num % 2 === 0);
console.log(allEven1); 

let mixedNumbers1 = [2, 3, 6, 8, 10];
allEven = mixedNumbers1.every(num => num % 2 === 0);
console.log(allEven); 

// sort

let fruit6 = ["Banana", "Orange", "Apple", "Mango"];
fruit6.sort();
console.log(fruit6); 

// splice

let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits7); 

// toString

let fruits8 = ["Apple", "Banana", "Mango"];
let fruitString1= fruits8.toString();
console.log(fruitString1);

// Filter

let numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers9.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// Reduce

let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

// Map

let numbers2 = [1, 2, 3, 4, 5];
let doubled = numbers2.map(num => num * 2);
console.log(doubled); 

// forEach

let fruits2 = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log(fruit));











