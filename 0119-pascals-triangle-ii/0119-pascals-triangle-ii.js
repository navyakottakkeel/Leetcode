/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    let prev = 1;
    for(let i = 1; i<= rowIndex; i++){
        let next = prev * (rowIndex - i +1) / i
        res.push(next);
        prev = next;
    }
    return res;
};