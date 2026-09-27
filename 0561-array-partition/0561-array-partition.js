/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let ans = 0;
    let n = nums.length;
    nums.sort((a,b) => a - b);
    for(let i = 0; i < n; i+=2){
        ans += nums[i]
    }
    return ans;
};