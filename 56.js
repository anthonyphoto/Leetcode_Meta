// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Both O(N^2)
var merge = function(intervals) {
    
    const history = new Set();
    const lookup = new Map();   // node and []

    for (let i = 0; i < intervals.length; i++) {
        const node = intervals[i];
        if (!lookup.get(node)) {
            lookup.set(node, []);
            for (let j = 0; j < i; j++) {
                const prev = intervals[j];
                if ((node[0] <= prev[1] && prev[0] <= node[1]) || (prev[0] <= node[1] && node[0] <= prev[1])) {
                    lookup.get(prev).push(node);
                    lookup.get(node).push(prev);
                    // break;
                }
            }
        }
    }

    const out = [];
    console.log("map:", lookup)

    for (let i = 0; i < intervals.length; i++) {
        const node = intervals[i];
        if (history.has(node)) continue;

        history.add(node);
        const queue = [node];
        const newInt = [...node];

        while (queue.length > 0) {
            const first = queue.shift();
            if (first[0] < newInt[0]) newInt[0] = first[0];
            if (first[1] > newInt[1]) newInt[1] = first[1];

            for (let adj of lookup.get(first)) {
                if (history.has(adj)) continue;
                history.add(adj);
                queue.push(adj);
            }
        }

        out.push(newInt);

    }
    return out;

    
};

// const intervals = [[1,3],[2,6],[8,10],[15,18]];
const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]];
console.log(merge(intervals))