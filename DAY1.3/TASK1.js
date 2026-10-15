function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function isEven(number) {
    return number % 2 === 0;
}

function getLargest(a, b, c) {
    return Math.max(a, b, c);
}

function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}

// Testing the functions
console.log(getFullName("Ayaz", "Vhora"));
console.log(isEven(8));
console.log(getLargest(10, 25, 15));
console.log(calculateDiscount(1000, 20));