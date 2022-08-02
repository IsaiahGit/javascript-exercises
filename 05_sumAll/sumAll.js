const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number")
        return "ERROR";
    if (num1 > num2) {
        let temp;
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    num1 -= 1;
    num1 = ((num1 * num1 + num1) / 2);
    num2 = ((num2 * num2 + num2) / 2);
    return num2 - num1;
};

// Do not edit below this line
module.exports = sumAll;
