/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    let freq = new Map();
    let p = paragraph.toLowerCase().match(/\w+/g);
    for(let word of p){
        if(!bannedSet.has(word)){
            freq.set(word, (freq.get(word) || 0) + 1);
        }
    }
    let maxCount = 0, result = '';
    for (const [word, count] of freq.entries()) {
        if (count > maxCount) {
            maxCount = count;
            result = word;
        }
    }
    return result;
};