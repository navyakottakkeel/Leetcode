/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = 'aeiou'
    let arr = sentence.split(' ');
    let append = 'a';

    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i][0].toLowerCase())){
            arr[i] = arr[i] + 'ma';
        }else{
            arr[i] = arr[i].slice(1) + arr[i][0] + 'ma';
        }
        arr[i] = arr[i] + append;
        append += 'a';
    }
    return arr.join(' ');
};