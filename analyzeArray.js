function analyzeArray(array) {

    const average = (function(){
        let sum = 0;
        for (let number of array) {
            sum += number;
        }
        return sum / array.length
    })();

    const min = (function() {
        let minValue = null
        for (let number of array) {
            if (minValue === null) minValue = number;
            else if(number < minValue) minValue = number;
        }
        return minValue;
    })();

    const max = (function() {
        let maxValue = null
        for (let number of array) {
            if (maxValue === null) maxValue = number;
            else if(number > maxValue) maxValue = number;
        }
        return maxValue;
    })();

    const length = array.length;

    return {average, min, max, length}
}

module.exports = analyzeArray;