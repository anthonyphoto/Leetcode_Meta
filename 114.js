// 114. Flatten Binary Tree to Linked List

// Given the root of a binary tree, flatten the tree into a "linked list":

//    The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
//    The "linked list" should be in the same order as a pre-order traversal of the binary tree.



// Example 1:

// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// Example 2:

// Input: root = []
// Output: []

// Example 3:

// Input: root = [0]
// Output: [0]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function traversal(node, out) {
    if (!node) {
        return;
    }

    out.push(node.val);

    if (node.left) {
        traversal(node.left, out);
    }
    if (node.right) {
        traversal(node.right, out);
    }
    // console.log(node.val);
}
var flatten = function(root) {
    if (!root) return;

    const out = [];
    traversal(root, out);

    console.log(out)

    const res = new TreeNode(out[0]);

    let node = root;
    node.val = out[0];
    node.left = null;

    for (let i = 1; i < out.length; i++) {

        // const newNode = new TreeNode(out[i]);
        node.right = new TreeNode(out[i]);
        node = node.right;
    }

    // return res;

};

class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
const i2 = new TreeNode(2);
root.left = i2;
const i3 = new TreeNode(3);
i2.left = i3;
const i4 = new TreeNode(4);
i2.right = i4;
const i5 = new TreeNode(5);
root.right = i5;
const i6 = new TreeNode(6);
i5.right = i6;

console.log(flatten(root))
console.log(root)
// console.log(root)