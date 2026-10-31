/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    let score = 0, counter = 0;
    for(let i = 0; i < events.length; i++){
        if(counter < 10){
            if(events[i] === 'W'){
                counter++
            }else if(events[i] === 'WD' || events[i] === 'NB'){
                score++;
            }else{
                score += Number(events[i])
            }
        }else{
            break;
        }
    }
    return [score, counter]
};