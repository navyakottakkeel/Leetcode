/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0]
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i]
        }else if(profit < (prices[i] - buy)){
            profit = prices[i] - buy
        }
    }
    return profit;
};