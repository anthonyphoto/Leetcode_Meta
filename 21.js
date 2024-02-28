// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node1 = list1;
    let node2 = list2;

    let list = null;
    let tmp = null;

    while (node1 || node2) {
        let val = 0;
        if (node1 && node2) {
            if (node1.val < node2.val) {
                val = node1.val;
                node1 = node1.next;
            } else {
                val = node2.val;
                node2 = node2.next;
            }

        } else if (node1) {
            val = node1.val;
            node1 = node1.next;

        } else if (node2) {
            val = node2.val;
            node2 = node2.next;

        }

        const newNode = new ListNode(val);
        if (!list) {
            list = newNode;
            tmp = list;
        } else {
            tmp.next = newNode;
            tmp = tmp.next;
        }
    }
    return list;

};


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

const print = head => {
    let node = head;
    let str = '';
    while (node) {
        str += ' ' + node.val;
        node = node.next;
    }
    console.log(str)
}

const list = mergeTwoLists(l1, l2);

print(l1)
print(l2)
print(list)


// ChatGPT Solution
// Your implementation of merging two sorted linked lists is already quite efficient. However, there are a few minor improvements you could consider to make the code cleaner and more readable:

// Use a dummy head node: Instead of initializing list and tmp to null, consider using a dummy head node. This can simplify the logic for inserting nodes into the merged list.
// Simplify the value selection: You can simplify the logic for selecting the value to insert into the merged list by using a ternary operator.
// Here's an updated version of your code with these improvements:

// var mergeTwoLists = function(list1, list2) {
//     // Dummy head node
//     const dummyHead = new ListNode(0);
//     let tmp = dummyHead;

//     let node1 = list1;
//     let node2 = list2;

//     while (node1 !== null && node2 !== null) {
//         // Select the smaller value and move the corresponding pointer forward
//         const val = node1.val < node2.val ? node1.val : node2.val;
//         if (node1.val < node2.val) {
//             node1 = node1.next;
//         } else {
//             node2 = node2.next;
//         }

//         // Create a new node with the selected value and append it to the merged list
//         tmp.next = new ListNode(val);
//         tmp = tmp.next;
//     }

//     // Append the remaining nodes from either list
//     tmp.next = node1 !== null ? node1 : node2;

//     // Return the head of the merged list (skip the dummy head)
//     return dummyHead.next;
// };