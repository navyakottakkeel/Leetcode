/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = new Set();
    for(let i = 0; i < digits.length; i++){
        if(digits[i] === 0) continue;
        for(let j = 0; j < digits.length; j++){
            if(i === j) continue;
            for(let k = 0; k < digits.length; k++){
                if(k === i || k === j) continue;
                if(digits[k] % 2 != 0) continue;
                let num = digits[i] * 100 + digits[j] * 10 + digits[k];
                res.add(num)
            }
        }
    }
    let arr = [...res];
    return arr.sort()
};