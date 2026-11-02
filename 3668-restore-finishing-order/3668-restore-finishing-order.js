/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let res = [];
    for(let id of order){
        if(friends.includes(id)){
            res.push(id)
        }
    }
    return res;
};