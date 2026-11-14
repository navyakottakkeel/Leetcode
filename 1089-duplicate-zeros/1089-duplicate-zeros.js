/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const n = arr.length;
    let zeros = arr.filter(x => x === 0).length;
    let i = n - 1;
    let j = n + zeros - 1;

    while(i >= 0){
        if(j < n) arr[j] = arr[i];
        if(arr[i] === 0){
            j--;
            if(j < n) arr[j] = 0;
        }
        i--;
        j--;
    }
};