// 426. Convert Binary Search Tree to Sorted Doubly Linked List

// Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

// You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

// We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.

 

// Example 1:

// Input: root = [4,2,5,1,3]


// Output: [1,2,3,4,5]

// Explanation: The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// Time O(N)
// Space O(logN) best case: O(N) - Worst
const dfs = node => {
    if (!node) return;

    let left = [];
    let right = [];

    if (node.left) {
        left = dfs(node.left);
    }

    if (node.right) {
        right = dfs(node.right);
    }
    return [...left, node, ...right];
}

var treeToDoublyList = function(root) {
    if (root === null) return null;

    const list = dfs(root);

    const len = list.length;

    for (let i = 0; i < len; i++) {
        list[i].left = list[(i - 1 + len) % len];
        list[i].right = list[(i + 1 + len) % len];
    }
    return list[0];
};


function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

const root = new Node(4); //i4
const i2 = new Node(2);
root.left = i2;
const i1 = new Node(1);
i2.left = i1;
const i3 = new Node(3);
i2.right = i3;
const i5 = new Node(5);
root.right = i5;

// console.log(root)
console.log(treeToDoublyList(root))
