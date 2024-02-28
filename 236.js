// 236. Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
const i5 = new TreeNode(5);
root.left = i5;
const i6 = new TreeNode(6);
i5.left = i6;
const i2 = new TreeNode(2);
i5.right = i2;
const i7 = new TreeNode(7);
i2.left = i7;
const i4 = new TreeNode(4);
i2.right = i4;

const i1 = new TreeNode(1);
root.right = i1;
const i0 = new TreeNode(0);
i1.left = i0;
const i8 = new TreeNode(8);
i1.right = i8;

// console.log(root)


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// const findPath = (node, target) => {
//     if (node === target) return [node];
//     let leftRes = [];
//     let rightRes = [];

//     if (node.left) {
//         leftRes = findPath(node.left, target);
//     } 
//     if (node.right) {
//         rightRes = findPath(node.right, target);
//     }

//     if (leftRes.length > 0) {
//         return [node, ...leftRes];
//     } else if (rightRes.length > 0) {
//         return [node, ...rightRes];
//     } else {
//         return [];
//     }
// }
const findPath = (node, target) => {
    if (node === target) return [node];

    if (node.left) {
        const res = findPath(node.left, target);
        if (res.length > 0) {
            return [node, ...res];
        }
    } 
    if (node.right) {
        const res = findPath(node.right, target);
        if (res.length > 0) {
            return [node, ...res];
        }
    }

    return [];
}

var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null;

    const path1 = findPath(root, p);
    const path2 = findPath(root, q);


    let prevParent = null;
    const len = path1.length >= path2.length ? path1.length : path2.length;
    for (let i = 0; i < len; i++) {
        if (path1[i] === path2[i]) {
            if (i === len - 1) {
                return path1[i]
            } else {
                prevParent = path1[i]
            }
        } else {
            return prevParent;
        }
    }
};


const ans = lowestCommonAncestor(root, i5, i4);
console.log("ANS: ", ans)