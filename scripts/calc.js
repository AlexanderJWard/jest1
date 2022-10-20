function addition(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Error"
    } else return num1 + num2;
}

module.exports = addition;