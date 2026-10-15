//A
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));


//B
const calculateTotal = function(price, quantity) {
    return price * quantity;
};

console.log(calculateTotal(100, 3));


//C
const calculateTotal = (price, quantity) => {
    return price * quantity;
};

console.log(calculateTotal(100, 3));