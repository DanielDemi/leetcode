/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xArray = x.toString().split('');
    var flag = true;
    var length = xArray.length;
    var middle = Math.ceil(length / 2);
    for (var i = 0; i < length; i++) {
        if (i > middle) {
            break;
        } 
        if (xArray[i] !== xArray[length - 1 - i]) {
            flag = false;
            break;
        }
    }
    return flag;
};
// @lc code=end

