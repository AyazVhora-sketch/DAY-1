// A
function showStudent() {
  const name = "Asha";
  let marks = 80;

  console.log(name);
  console.log(marks);
}

showStudent();


//B
function showStudent() {
  const name = "Asha";
  let marks = 80;

  return { name, marks };
}

const student = showStudent();

console.log(student.name);
console.log(student.marks);