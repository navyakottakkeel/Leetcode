/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false;
        }
    }
    return true;
};