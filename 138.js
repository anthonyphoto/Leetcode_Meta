// 138 Copy List with Random Pointer

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

//     val: an integer representing Node.val
//     random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

// Your code will only be given the head of the original linked list.



// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.random = null;
//     }

// }



// let node = head;
// while (node != null) {
//     console.log(node.val, node.random?.val);
//     node = node.next;
// }


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// function Node(val, next, random) {
//     this.val = val;
//     this.next = next;
//     this.random = random;
// }
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }

}

const head = new Node(7);

const item1 = new Node(13);
head.next = item1;

const item2 = new Node (11);
item1.next = item2;

const item3 = new Node (10);
item2.next = item3;

const item4 = new Node (1);
item3.next = item4;

item1.random = head;
item2.random = item4;
item3.random = item2;
item4.random = head;

var copyRandomList = function(head) {
    let newHead = null; // new LL head
    let cur = null; // null로 해줘야함

    const lookup = new Map();

    let node = head;
    while (node !== null) {
        if (cur === null) { // head
            newHead = new Node(node.val);
            lookup.set(node, newHead);
            cur = newHead;
        } else {
            const newNode = new Node(node.val);
            lookup.set(node, newNode);
            cur.next = newNode;
            cur = newNode;
        }
        node = node.next;
    }

    node = head;
    cur = newHead;
    while (node !== null) {

        cur.random = lookup.get(node.random);
        node = node.next;
        cur = cur.next;
    }
    return newHead;

    // console.log("--", newHead)
    // cur = newHead;
    // while (cur) {
    //     console.log(cur.val)
    //     console.log(cur.random?.val)
    //     cur = cur.next;
    // }

};


copyRandomList(head);