let grades = [60, 60, 59, 59];
const passingGrade = 60;
let countBelowPassing = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] < passingGrade) {
        countBelowPassing++;
    }
}

if (countBelowPassing === 0) {
    console.log("اThe student is passing without assistance");
} else if (countBelowPassing === 1) {
    console.log("The student is passing with one mark of assistance");
} else if (countBelowPassing === 2) {
    console.log("The student is passing with tow mark of assistance");
} else {
    console.log("The student is failing");
}