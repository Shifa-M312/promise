const myArray = [1, 3, 9, 12, 15, 18, 21];
const squaredArray = [];

for (let i = 0; i < myArray.length; i++) {
    squaredArray.push(myArray[i] * myArray[i]);
}

console.log(squaredArray);
