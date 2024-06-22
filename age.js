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
