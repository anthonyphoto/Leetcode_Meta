// 314. Binary Tree Vertical Order Traversal

// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.



// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]

// Example 2:

// Input: root = [3,9,8,4,0,1,7]
// Output: [[4],[9],[3,0,1],[8],[7]]

// Example 3:

// Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
// Output: [[4],[9,5],[3,0,1],[8,2],[7]]

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
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const i3 = new TreeNode(3);
const i9 = new TreeNode(9);
i3.left = i9;
const i4 = new TreeNode(4);
i9.left = i4;
const i0 = new TreeNode(0);
i9.right = i0;
const i5 = new TreeNode(5);
i0.left = i5;
const i8 = new TreeNode(8);
i3.right = i8;
const i1 = new TreeNode(1);
i8.left = i1;
const i2 = new TreeNode(2);
i1.right = i2;
const i7 = new TreeNode(7);
i8.right = i7;

console.log(i3)

const dfs = (node, depth = 0, align=0) => {
    if (node === null) return [];

    let left = [];
    let right = [];

    if (node.left) {
        left = dfs(node.left, depth+1, align-1);
    }
    if (node.right) {
        right = dfs(node.right, depth+1, align+1);
    }
    node.depth = depth;
    node.align = align;
    return [...left, node, ...right];
}


var verticalOrder = function(root) {
    const list = dfs(root);
    const out = [];

    let outInd = -1;
    let prevAlign = null;
    list.sort((a, b) => {
        if (a.align !== b.align) {
            return a.align - b.align;
        } else {
            return a.depth - b.depth;
        }
    });
    // console.log(list.map(a => `${a.val},${a.align}|${a.depth}`))

    for (let i = 0; i < list.length; i++){
        const node = list[i];
        const {val, depth, align} = node;

        if (prevAlign === align) {
            out[outInd].push(val);
        } else {
            prevAlign = align;
            out.push([val]);
            outInd++;
        }
    }
    return out;

};


const res = verticalOrder(i3);
console.log(res)
