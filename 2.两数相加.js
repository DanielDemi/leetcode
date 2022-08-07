/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l1data = [];
    var l2data = [];
    if (l1.val || l1.val === 0) {
        l1data.push(l1.val)
    }
    let cL1 = l1.next;
    while (cL1) {
        l1data.push(cL1.val)
        cL1 = cL1.next;
    }
    if (l2.val || l2.val === 0) {
        l2data.push(l2.val)
    }
    let cL2 = l2.next;
    while (cL2) {
        l2data.push(cL2.val)
        cL2 = cL2.next;
    }
    // l1data = [2,4,9]
    // l2data = [5,6,4,9]
    l2data = l2data.reverse();
    l1data = l1data.reverse();
    // 避免大数处理
    var length1 = l1data.length;
    var length2 = l2data.length;
    // 补充长度
    if (length1 > length2) {
        for (let i = 0; i < length1 - length2; i++) {
            l2data.unshift(0)
        }
    } else if (length2 > length1) {
        for (let i = 0; i < length2 - length1; i++) {
            l1data.unshift(0)
        }
    }
    // console.log('l1data', l1data)
    // console.log('l2data', l2data)
    var result = [];
    var flag = 0;
    for (var i = l2data.length - 1; i >= 0; i--) {
        var count = l1data[i] + l2data[i] + flag;
        if (count >= 10) {
            flag = 1;
            result.unshift(count % 10);
        } else {
            flag = 0;
            result.unshift(count);
        }
    }
    if (flag === 1) {
        result.unshift(1);
    }
    // console.log('result', result)
    result = result.reverse();
    var data;
    for (var j = result.length - 1; j >= 0 ; j--) {
        if (!data) {
            data = new ListNode(result[j]) 
        } else {
            data = new ListNode(result[j], data)
        }
    }
    return data;
};
// @lc code=end

