/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const res = [];
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    if (j - i >= 3) res.push([i, j - 1]);
    i = j;
  }
  return res;
};