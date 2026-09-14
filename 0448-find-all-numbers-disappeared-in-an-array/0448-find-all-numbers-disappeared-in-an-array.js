/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numSet = new Set(nums)
    let res = [];
    for(i = 1; i <= nums.length; i++){
        if(!numSet.has(i)){
            res.push(i);
        }
    }
    return res;
};