function checkGrade(grade) {
    if (grade >= 60) {
        return "Passed!";
    } else {
        return "Failed.";
    }
}


const userGrade = 75; 
const result = checkGrade(userGrade);
console.log(result); 
