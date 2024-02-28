// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

//     LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
//     int get(int key) Return the value of the key if the key exists, otherwise return -1.
//     void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity = 2) {
        this.head = null;
        this.tail = null;
        this.cap = capacity;
        this.count = 0;
        this.lookup = new Map();

    }
    
    put(key, val) {
        const node = new Node(key, val);
        this.lookup.set(key, node);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;    
            this.tail = node;
        }

        this.count++;

        if (this.count > this.cap) {
            const tmp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.lookup.set(tmp.key, null);
            this.count--;
        }
        
        // console.log(`--put:[${key},${val}:CNT:${this.count}]`, this.head)
        // console.log("LK:", this.lookup)
        return null;
    }

    get(key) {
        const node = this.lookup.get(key);

        if (!node) return -1;
        if (node !== this.tail) {
            if (node === this.head) {
                this.head = node.next;
                this.head.prev = null;
            } else {
                console.log("*node:", node)

                node.prev.next = node.next;
                node.next.prev = node.prev;
 
            }
            this.tail.next = node;
            node.next = null;
            node.prev = this.tail;
            this.tail = node;    
        }
        console.log(`--get:[${key}]`, this.head)

        return node.val;
    }


}


// const com = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"];
// const val = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
const com = ["LRUCache","put","put","put","put","get","get"];
const val = [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]];

const out = [];

const lc = new LRUCache(val[0][0]);
out.push(null);



// for (let i = 1; i < 6; i++) {
for (let i = 1; i < com.length; i++) {
    if (com[i] === 'put') {
        const res = lc.put(...val[i]);
        out.push(res);
        
    } else if (com[i] === 'get') {
        const res = lc.get(...val[i]);
        out.push(res);
        
        
    }


}

console.log(out)
