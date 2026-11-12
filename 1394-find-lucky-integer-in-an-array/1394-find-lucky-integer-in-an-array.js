/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let count = new Map()
;    for(let num of arr){
        count.set(num, (count.get(num) ?? 0) + 1)
    }
    let res = -1;
    for(let [num, cnt] of count){
        if(num === cnt && num > res ){
            res = num;
        }
    }
    return res;
};