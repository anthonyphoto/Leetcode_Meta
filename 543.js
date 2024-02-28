// 543. Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1

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
 * @return {number}
 */


var diameterOfBinaryTree = function(root) {
    let longest = 0;
    function dfs(root) {
        if (root === null) return 0;

        let left = 0;
        let right = 0;
    
        if (root.left) {
            left = dfs(root.left) + 1;
        }
        
        if (root.right) {
            right = dfs(root.right) + 1;
        }


        longest = Math.max(longest, left + right);

    
        return Math.max(left, right);
    
    }

    dfs(root);

    return longest;

};


class TreeNode {
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
const i2 = new TreeNode(2);
root.left = i2;
const i4 = new TreeNode(4);
i2.left = i4;
const i5 = new TreeNode(5);
i2.right = i5;
const i3 = new TreeNode(3);
root.right = i3;


console.log(diameterOfBinaryTree(root));
