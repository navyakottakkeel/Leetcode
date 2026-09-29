/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((acc,curr) => acc + curr, 0);
    const sumB = bobSizes.reduce((acc,curr) => acc + curr, 0);

    const diff = (sumA - sumB) / 2;

    let set = new Set(aliceSizes);

    for(let y of bobSizes){
        let x = y + diff;
        if(set.has(x)){
            return [x, y]
        }
    }
};