// 1.

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

  const grades = generateArray(12, 100);
console.log(grades);

const gradesDoc = document.getElementById('grades');
gradesDoc.textContent = `Список оценок: ${grades}`;

// 2.

let sumGrades = grades.reduce(function(a, b) {
    return a+b;
});

let averageGrades = Math.round(sumGrades/grades.length);

console.log(averageGrades);

const averageGradeDoc = document.getElementById('averageGradeP');
averageGradeDoc.textContent = `Средний балл: ${averageGrades}`;

// 3.

const maxGrade = Math.max(...grades);
console.log(maxGrade);

const maximumGrade = document.getElementById('maxgradep');
maximumGrade.textContent = `Максимальный балл: ${maxGrade}`;

// 4.

const minGrade = Math.min(...grades);
console.log(minGrade);

const minimumGrade = document.getElementById('mingradep');
minimumGrade.textContent = `Минимальный балл: ${minGrade}`;

// 5.

const goodGrades = grades.filter(function(grade){
    return grade > 60;
});

console.log(goodGrades);
console.log(goodGrades.length);

const goodGradesStudent = document.getElementById('goodstudents');
goodGradesStudent.textContent = `Количество студентов, получивших положительную оценку: ${goodGrades.length}`;

// 6.

const badGrades = grades.filter(function(grade){
    return grade < 60;
});

console.log(badGrades);
console.log(badGrades.length);

const badGradesStudent = document.getElementById('badstudents');
badGradesStudent.textContent = `Количество студентов, получивших отрицательную оценку: ${badGrades.length}`;

// 7.

const letterGrades = grades.map(function(grade){
    if(grade >80 ) {
        return "A"
    } else if (grade >60 && grade <79) {
        return "B"
    } else if (grade >40 && grade <59) {
        return "C"
    } else if (grade>20 && grade >39) {
        return "D"
    } else {
        return "E"
    }
});

console.log(letterGrades);

const marksLetters = document.getElementById('lettersmark');
marksLetters.textContent = `Буквенный формат оценок: ${letterGrades}`;