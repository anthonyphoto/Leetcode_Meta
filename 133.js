// 133. Clone Graph

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
        // this.visited = false;
    }
}

const item1 = new Node(1);
const item2 = new Node(2);
const item3 = new Node(3);
const item4 = new Node(4);
item1.neighbors.push(item2);
item1.neighbors.push(item4);
item2.neighbors.push(item1);
item2.neighbors.push(item3);
item3.neighbors.push(item2);
item3.neighbors.push(item4);
item4.neighbors.push(item1);
item4.neighbors.push(item3);

const bfs = node => {
    let queue = [];
    const out = [];

    queue.push(node);
    node.visited = true;

    while(queue.length > 0) {
        const first = queue.shift();
        out.push(first.val);

        for (let i = 0; i < first.neighbors.length; i++) {
            const item = first.neighbors[i];
            if (!item.visited) {
                queue.push(item);
                item.visited = true;
            }
        }
    }
    return out;
}

// const dfsRec = (node, out) => {
//     out.push(node.val);
//     node.visited = true;
//     for (let i = 0; i < node.neighbors.length; i++) {
//         const item = node.neighbors[i];
//         if (!item.visited) dfsRec(node.neighbors[i], out);
//     }
// }

// const dfs = node => {
//     const out = [];
//     dfsRec(node, out);
//     return out;
// }

// console.log(bfs(item1));
// console.log(dfs(item1));


// console.log(item1)
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) return null;
    
    const lookup = new Map();
    const visited = new Set();

    const queue = [];
    queue.push(node);
    visited.add(node);
    // node.visited = true;
    const list = [];
    const copy = [];
    
    while (queue.length > 0) {
        const first = queue.shift();
        list.push(first);
        const newNode = new Node(first.val);
        copy.push(newNode);

        lookup.set(first, newNode);

        for (let i = 0; i < first.neighbors.length; i++) {
            const item = first.neighbors[i];

            if (!visited.has(item)) {
                visited.add(item);
                queue.push(item);
            }
        }
    }

    // console.log(list);
    for (let i = 0; i < list.length; i++) {
        // const nb = list[i].neighbors;
        // console.log("-", list[i].neighbors)
        for (let j = 0; j < list[i].neighbors.length; j++) {
            copy[i].neighbors.push(lookup.get(list[i].neighbors[j]));
        }
    }
    // for (let i = 0; i < copy.length; i++) {
    //     console.log(copy[i])
    // }
    console.log("Visited,", visited)

    return copy[0];
};

// console.log(bfs(item1));
const copy = cloneGraph(item1);
console.log(bfs(copy));