export default function analyzeArray(arr) {
    function getMin(arr) {
        return Math.min(...arr);
    }
    function getMax(arr) {
        return Math.max(...arr);
    }
    function getAverage(arr) {
        return arr.reduce((previous, current) => (current += previous)) / arr.length;
    }
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    };
}