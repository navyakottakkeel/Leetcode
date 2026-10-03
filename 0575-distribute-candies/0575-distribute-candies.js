/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let n = candyType.length;
    let uniqueTypes = new Set(candyType);
    return Math.min(uniqueTypes.size, n / 2);
};