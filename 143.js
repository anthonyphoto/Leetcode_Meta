// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln

// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1);
const item1 = new ListNode(2);
head.next = item1;
const item2 = new ListNode(3);
item1.next = item2;
const item3 = new ListNode(4);
item2.next = item3;
// const item4 = new ListNode(5);
// item3.next = item4;

let node = head;
while (node) {
    console.log(node.val);
    node = node.next;
}

console.log("-------AFTER----")



var reorderList = function(head) {
    if (head === null) return;

    let node = head;
    const nodes = [];
    
    while (node) {
        nodes.push(node);
        node = node.next;
    }

    let cur = head;
    let leftInd = 1;
    let rightInd = nodes.length - 1;
    let dir = 'RIGHT'; 

    console.log("-LR", leftInd, rightInd)
    while (leftInd <= rightInd) {
        console.log("-LR", leftInd, rightInd)
        if (dir === 'RIGHT') {
            cur.next = nodes[rightInd];
            rightInd--;
            cur = cur.next;
            dir = 'LEFT';
        } else {
            cur.next = nodes[leftInd];
            leftInd++;
            cur = cur.next;
            dir = 'RIGHT'
        }
    }
    cur.next = null;
};


reorderList(head);
node = head;
while (node) {
    console.log(node.val);
    node = node.next;
}
