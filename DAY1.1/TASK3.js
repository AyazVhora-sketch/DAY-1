//A
const message = "Hello, JavaScript!";

function greet() {
  console.log(message);
}

greet();
console.log(message);

//B
function showMarks() {
  let marks = 85;
  console.log("Inside function:", marks);
}

showMarks();

//C
{
  let age = 21;
  const city = "Vadodara";

  console.log(age);
  console.log(city);
}

//D
if (true) {
  var a = 10;
  let b = 20;

  console.log("Inside block, a:", a);
  console.log("Inside block, b:", b);
}

console.log("Outside block, a:", a);