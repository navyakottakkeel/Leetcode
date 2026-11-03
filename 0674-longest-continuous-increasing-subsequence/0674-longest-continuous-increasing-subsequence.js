/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1, maxCount = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i - 1]){
            count++;
            maxCount = Math.max(maxCount, count)
        }else{
            count = 1;
        }
    }
    return maxCount;
};