/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var  valueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    var arrays = s.split('');
    let sum = 0;
    var before;
    var length = arrays.length;
    for (var i = 0; i < length; i ++) {
        var current = valueMap[arrays[i]];
        if (!before) {
            before = current
        } else {
            if (before >= current) {
                sum += before
            } else {
                sum -= before
            }
            before = current
        }
        if (i === length - 1) {
            sum += current
        } 
    }
    return sum;
};
// @lc code=end

