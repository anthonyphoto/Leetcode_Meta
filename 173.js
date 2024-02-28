// 173. Binary Search Tree Iterator

// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

//     BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
//     boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
//     int next() Moves the pointer to the right, then returns the number at the pointer.

// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

 

// Example 1:

// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False


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
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// var BSTIterator = function(root) {
    
// };

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function() {
    
// };

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

class BSTIterator {
    constructor(root) {
        this.root = root;
        this.order = this.traverse(root);
        this.index = 0;
    }

    traverse(node) {
        if (!node) return [];

        let left = [];
        let right = [];
        

        if (node.left) {
            left = this.traverse(node.left)
        }
        if (node.right) {
            right = this.traverse(node.right)
        }

        return [...left, node.val, ...right];        
    }


    next() {
        return this.hasNext() ? this.order[this.index++] : -1;
    }
    
    hasNext() {
        return (this.index < this.order.length);
    }
}

const root = new TreeNode(7);
const i3 = new TreeNode(3);
root.left = i3;
const i15 = new TreeNode(15);
root.right = i15;
const i9= new TreeNode(9);
i15.left = i9;
const i20 = new TreeNode(20);
i15.right = i20;

const obj = new BSTIterator(root);
console.log(obj.order, obj.index)
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
// obj.next();
// console.log(root)