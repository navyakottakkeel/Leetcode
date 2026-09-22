/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1;
    let carry = 0, res = '';

    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? +num1[i] : 0;
        const n2 = j >= 0 ? +num2[j] : 0;
        const sum = n1 + n2 + carry;
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return res;
};