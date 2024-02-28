
// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:

// Input: root = [1]
// Output: ["1"]


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // console.log('-root-', root?.val)

    if (!root.left && !root.right) {
        return [`${root.val}`];
    }

    let res = [];
    if (root.left) {
        const left = binaryTreePaths(root.left);
        res = left.map(item => `${root.val}->${item}`);
        
        
    }
    
    if (root.right) {
        const right = binaryTreePaths(root.right);
        res = [...res, ...right.map(item => (root.val + '->' + item))];
    }
    return res;
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
const i5 = new TreeNode(5);
i2.right = i5;

const i3 = new TreeNode(3);
root.right = i3;
// const i5 = new TreeNode(5);
// root.right = i5;
// const i6 = new TreeNode(6);
// i5.right = i6;


console.log(binaryTreePaths(root));

console.log(root)