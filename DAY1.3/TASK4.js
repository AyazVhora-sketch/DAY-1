//A
function getTopStudent(students) {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((top, student) => {
        return calculateAverage(student.marks) >
            calculateAverage(top.marks)
            ? student
            : top;
    });
}

console.log(getTopStudent(students));


//B
function getPassingStudents(students) {
    return students.filter(student =>
        hasPassed(calculateAverage(student.marks))
    );
}

console.log(getPassingStudents(students).map(s => s.name));


//C
function countPassingStudents(students) {
    return getPassingStudents(students).length;
}

console.log(countPassingStudents(students));


//D
const testStudent = {
    name: "Test Student",
    marks: [80, 70, -5, 120, "abc", null]
};

console.log(processStudent(testStudent));


//E
const emptyStudents = [];

console.log(getTopStudent(emptyStudents));
console.log(getPassingStudents(emptyStudents));
console.log(countPassingStudents(emptyStudents));