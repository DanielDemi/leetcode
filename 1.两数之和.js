/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const data = new Map();
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        let _d = nums[i];
        var _diff = target - _d;
        const exist = data.get(_diff);
        if (typeof exist === 'number') {
            result = [exist, i]
            break;
        }
        data.set(_d, i);
    }
    return result;
};
// @lc code=end

