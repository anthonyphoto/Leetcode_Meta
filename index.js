// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,null,3]
// Output: [1,3]


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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
// root.left.right = new TreeNode(5);
// root.right = new TreeNode(3);
// root.right.right = new TreeNode(4);

console.log(root)


// only right nodes
// var rightSideView = function(root, res = []) {
//     if (root === null) {
//         return res;
//     }
//     res.push(root.val);

//     // return [...rightSideView(root.right), root.val]; // 거꾸로 오기
//     return rightSideView(root.right, res);
// };

// rightnodes and left
// var rightSideView = function(root) {
//     if (root === null) return [];
//     if (root.right) {
//         return [root.val, ...rightSideView(root.right)];
//     } else if(root.left) {
//         return [root.val, ...rightSideView(root.left)];
//     } else {
//         return [root.val];
//     }
// };

var rightSideView = function(root) {

};



var res = rightSideView(root);
console.log(res)
