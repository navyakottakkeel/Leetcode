/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 1) return stones[0];
    stones.sort((a,b) => b - a);
    while(stones.length > 1 ){
       const x = stones.shift();
       const y = stones.shift();
       if(x !== y){
        stones.push(x - y);
        stones.sort((a,b) => b - a);
       }
    }
    return stones.length > 0 ? stones[0] : 0;
};