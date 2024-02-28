// 124. Binary Tree Maximum Path Sum

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


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

var maxPathSum = function(root) {
    if (!root) return 0;
    let max;

    const rec = root => {
        let left = 0;
        let right = 0;
    
        if (root.left) {
            left = rec(root.left)
            if (left < 0) left = 0;
        }
        if (root.right) {
            right = rec(root.right)
            if (right < 0) right = 0;
        }

        const sum = root.val + left + right;
        max = max ? Math.max(sum, max) : sum;
    
        return root.val + Math.max(left, right);
        
    }

    rec(root);

    return max;

    // console.log(rec(root));
    // console.log('max', max)

    
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


console.log(maxPathSum(root));
