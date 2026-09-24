/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let ans = [];
    for(let i = 0; i < prices.length; i++){
        let newPrice = prices[i];
        for(let j = i + 1; j < prices.length; j++){
            if(prices[j] <= prices[i]){
                newPrice = prices[i] - prices[j];
                break;
            }
        }
        ans.push(newPrice)
    }
    return ans;
};