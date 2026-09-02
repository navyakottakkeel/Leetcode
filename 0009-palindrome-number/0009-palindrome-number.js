/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str =  x.toString()
    let rv = str.split('').reverse().join('');
    if(str === rv ){
        return true;
    }else{
        return false;
    }
};