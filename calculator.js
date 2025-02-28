const calculator = (function() {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x-y;
    }

    function divide(x, y) {
        if (y === 0) {
            return undefined;
        }
        return (x / y);
    }

    function multiply(x, y) {
        return (x * y);
    }

    return {add, subtract, divide, multiply};
})();

module.exports = calculator;