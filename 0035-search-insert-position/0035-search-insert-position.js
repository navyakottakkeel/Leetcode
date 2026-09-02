/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 let nums = [1,3,5,6];
 let target = 5;

var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i;
        }else if(nums[i] > target){
            return i;
        }
    }
    return nums.length;
};