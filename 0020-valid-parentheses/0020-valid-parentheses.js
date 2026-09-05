/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let chars = s.split('');
    let stack = [];
    for(let char of chars){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }else{
            let top = stack.pop();
            if(
                char === ')' && top !== '(' ||
                char === '}' && top !== '{' ||
                char === ']' && top !== '['
            ){
                return false;
            }
        }
    }
    if(stack.length === 0){
        return true
    }else{
        return false
    }
};