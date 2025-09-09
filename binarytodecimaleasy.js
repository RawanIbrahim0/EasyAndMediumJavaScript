const BTD = (number) => {
    let DNumber = 0;
    let i = 0;
    while (number != 0) {
        DNumber = DNumber + (Math.pow(2, i) * (number % 10));
        number = Math.floor(number / 10);
        i++;
    }
    return DNumber;
}

console.log(BTD(101));
console.log(BTD(111));
console.log(BTD(1010));
console.log(BTD(1001));