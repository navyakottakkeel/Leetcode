/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const first = "qwertyuiop"
    const second = "asdfghjkl"
    const third = "zxcvbnm"
    let res = [];
    for(let word of words){
        let isFirst = true;
        let isSecond = true;
        let isThird = true;
        for(let i = 0; i < word.length; i++){
            if(!first.includes(word[i].toLowerCase())){
                isFirst = false
            }
            if(!second.includes(word[i].toLowerCase())){
                isSecond = false
            }
            if(!third.includes(word[i].toLowerCase())){
                isThird = false
            }
        }
        if(isFirst || isSecond || isThird){
            res.push(word);
        }
    }
    return res;
};