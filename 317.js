// 317. Shortest Distance from All Buildings

// You are given an m x n grid grid of values 0, 1, or 2, where:

//     each 0 marks an empty land that you can pass by freely,
//     each 1 marks a building that you cannot pass through, and
//     each 2 marks an obstacle that you cannot pass through.

// You want to build a house on an empty land that reaches all buildings in the shortest total travel distance. You can only move up, down, left, and right.

// Return the shortest travel distance for such a house. If it is not possible to build such a house according to the above rules, return -1.

// The total travel distance is the sum of the distances between the houses of the friends and the meeting point.

// The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

 

// Example 1:

// Input: grid = [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]
// Output: 7
// Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2).
// The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal.
// So return 7.

// Example 2:

// Input: grid = [[1,0]]
// Output: 1

// Example 3:

// Input: grid = [[1]]
// Output: -1


/**
 * @param {number[][]} grid
 * @return {number}
 */
function isEqual(pt1, pt2) {
    return pt1[0] === pt2[0] && pt1[1] === pt2[1];
}

class Node {
    constructor(i, j, cnt = 0) {
        this.i = i;
        this.j = j;
        this.cnt = cnt;
        this.visited = false;
    }

}

function getDistance(start, end, grid){
    const visited = new Set();
    
    let node = new Node(start[0], start[1]);
    let queue = [node];
    
    while (queue.length > 0) {
        console.log('-', queue)
        const first = queue.shift();
        console.log('.', first)
        

        if (isEqual([first.i, first.j], end)) {
            return first.cnt;
        } else if (grid[first.i, first.j] === 1) {
            continue;
        } else {
            console.log("*")
            // console.log('-', first, start)
            const {i, j, cnt} = first;
            console.log('cnt', i, j, cnt)
            // cnt++;

            if (j > 0) {
                const left = grid[i][j - 1];
                console.log("left-", left)
                if (left < 2) queue.push(new Node(i, j - 1, cnt + 1));

            }
            if (j < grid[0].length - 1) {
                const right = grid[i][j + 1];
                if (right < 2) queue.push(new Node(i, j + 1, cnt + 1));

            }

            if (i > 0) {
                const up = grid[i - 1][j];
                if (up < 2) queue.push(new Node(i - 1, j, cnt + 1));
            }

            if (i < grid.length - 1) {
                const down = grid[i + 1][j];
                if (down < 2) queue.push(new Node(i + 1, j, cnt + 1));
            }
        }
        
    }
    return -1;

}


var shortestDistance = function(grid) {
    const availables = [];
    const bldgs = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const cell = grid[i][j];
            if (cell === 0) {
                availables.push([i, j]);
            } else if (cell === 1) {
                bldgs.push([i, j]);
            }
        }
    }
    const ava = availables[7];
    const bldg = bldgs[1];
    console.log("d:", getDistance(ava, bldg, grid));
    console.log(`From${ava} to ${bldg}`)
    console.log("avas", availables)
    // console.log("d:", getDistance(avaiables[0], bldgs[2], grid));


    // const start = [0,1];
//     console.log(avaiables);
//     console.log(bldgs);
};


const grid = [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]];

console.log(shortestDistance(grid))