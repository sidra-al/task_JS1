// let grades = [60, 60, 59, 59];
// const passingGrade = 60;
// let countBelowPassing = 0;

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < passingGrade) {
//         countBelowPassing++;
//     }
// }

// if (countBelowPassing === 0) {
//     console.log("اThe student is passing without assistance");
// } else if (countBelowPassing === 1) {
//     console.log("The student is passing with one mark of assistance");
// } else if (countBelowPassing === 2) {
//     console.log("The student is passing with tow mark of assistance");
// } else {
//     console.log("The student is failing");
// }

let day1 = 15;
let month1 = 5;
let year1 = 1990;

let day2 = 20;
let month2 = 3;
let year2 = 1992;

let totalDays1 = year1 * 360 + (month1 - 1) * 30 + day1;
let totalDays2 = year2 * 360 + (month2 - 1) * 30 + day2;

totalDays1 < totalDays2 ?
    console.log("the first person is older");
console.log("the second person is older");