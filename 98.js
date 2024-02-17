// 98. Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.


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
 * @return {boolean}
 */

class TreeNode(val, left, right) {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const head = new TreeNode(2);
head.left = new TreeNode(1);
head.right = new TreeNode(3);



var isValidBST = function(root, min=null, max=null) {
    if (root === null) {
        return true;
    }
    
    let leftResult = true;
    let rightResult = true;

    if (root.left) {
    
        if (root.left.val < root.val && (min === null || root.left.val > min)) {
            leftResult = isValidBST(root.left, min, root.val);
        } else {
            console.log('-', root.left.val, min, max)
            return false;
        }
    }
    if (root.right) {
    
        if (root.right.val > root.val && (max === null || root.right.val < max)) {
            rightResult = isValidBST(root.right, root.val, max);
        } else {
            console.log('-', root.right.val, min, max)
            return false;
        }
    }

    return leftResult && rightResult;

    
};