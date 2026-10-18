/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0;
    for(let char of columnTitle){
        ans = ans * 26 + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1)
    }
    return ans;
};