const students = [
    { name: "Ayaz", marks: [80, 75, 90] },
    { name: "Rahul", marks: [60, 55, 65] },
    { name: "Amit", marks: [30, 25, 40] },
    { name: "Neha", marks: [90, 95, 92] }
];

// Function 1: Calculate total marks
function calculateTotalMarks(marks) {
    const validMarks = marks.filter(
        mark => Number.isFinite(mark) && mark >= 0 && mark <= 100
    );

    return validMarks.reduce((total, mark) => total + mark, 0);
}

// Function 2: Calculate average marks
function calculateAverage(marks) {
    const validMarks = marks.filter(
        mark => Number.isFinite(mark) && mark >= 0 && mark <= 100
    );

    if (validMarks.length === 0) {
        return 0;
    }

    return calculateTotalMarks(validMarks) / validMarks.length;
}

// Function 3: Calculate grade
function getGrade(average) {
    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    if (average >= 35) return "D";
    return "F";
}

// Function 4: Check pass or fail
function hasPassed(average) {
    return average >= 35;
}

// Function 5: Process student result
function processStudent(student) {
    const average = calculateAverage(student.marks);

    return {
        name: student.name,
        total: calculateTotalMarks(student.marks),
        average: average.toFixed(2),
        grade: getGrade(average),
        result: hasPassed(average) ? "Pass" : "Fail"
    };
}

// Test all students
students.forEach(student => {
    console.log(processStudent(student));
});