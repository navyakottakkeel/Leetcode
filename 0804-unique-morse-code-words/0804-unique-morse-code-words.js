/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..",
                  "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const seen = new Set();
    for(let word of words){
        let morse = "";
        for(let char of word){
            morse += code[char.charCodeAt(0) - 97];
        }
        seen.add(morse);
    }
    return seen.size;
};