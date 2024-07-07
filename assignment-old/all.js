const number = prompt("Enter a number:");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}

let length = parseInt(prompt("Type the length of a Rectangle: "));
let width = parseInt(prompt("Type the width of a Rectangle: "));
let solving_area = length * width;
console.log("The area of the rectangle is " + solving_area + ".");

let age = parseInt(prompt("Enter your age"));

if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote.");
}

function calculateAge(birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);
    var years = otherDate.getFullYear() - birthDate.getFullYear();

    if (otherDate.getMonth() < birthDate.getMonth() || 
        (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
        years--;
    }

    return years;
}

function categorizeAge(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else if (age >= 20 && age <= 59) {
        return "Adult";
    } else {
        return "Senior";
    }
}


var birthDate = "12/02/1996"; 
var currentDate = "02/24/2010";
var age = calculateAge(birthDate, currentDate);
var category = categorizeAge(age);

console.log("Age:", age);
console.log("Category:", category);

var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
alert(a + b);

unction checkGrade(grade) {
    if (grade >= 60) {
        return "Passed!";
    } else {
        return "Failed.";
    }
}


const userGrade = 75; 
const result = checkGrade(userGrade);
console.log(result); 
