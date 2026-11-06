/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let d1 = 0, d2 = 0, sum = 0;
    if(start > destination){
        [start, destination] = [destination, start]
    }
    for(let i = start; i < destination; i++){
            d1 += distance[i]
    }
    for(let i = 0; i < distance.length; i++){
        sum += distance[i]
    }
    d2 = sum - d1;
    return Math.min(d1, d2)
};