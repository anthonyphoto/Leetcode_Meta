// 2. Add Two Numbers
// Medium
// Topics
// Companies

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


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
    let node1 = l1;
    let node2 = l2;
    let head = null;
    let tmp = head;
    let carryover = 0;


    while (node1 !== null && node2 !== null) {
        let num1 = 0;
        let num2 = 0;
        
        if (node1 !== null) {
            num1 = node1.val;
            node1 = node1.next;
        }

        if (node2 !== null) {
            num2 = node2.val;
            node2 = node2.next;
        }

        const sum = num1 + num2 + carryover;

        const newVal = sum % 10;
        carryover = parseInt(sum / 10, 10);

        const newNode = new ListNode(newVal);

        if (tmp === null) {
            head = newNode;
            tmp = newNode;
        } else {
            tmp.next = newNode;
            tmp = tmp.next;
        }
    }

    if (carryover > 0) {
        const newNode = new ListNode(carryover);
        tmp.next = newNode;
    }


    return head;

};


function print(head) {
    let node = head;
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    }

}

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// [9,9,9,9,9,9,9]
// [9,9,9,9]
const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);

const l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

const node = addTwoNumbers(l1, l2);
print(node);

// console.log(l1)
// console.log(l2)