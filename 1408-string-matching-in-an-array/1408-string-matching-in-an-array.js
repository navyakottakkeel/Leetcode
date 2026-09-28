/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let ans = [];
    for(let word of words){
        for(let i = 0; i < words.length; i++){
            if(word !== words[i] && words[i].includes(word)){
                ans.push(word);
                break;
            }
        }
    }
    return ans;
};