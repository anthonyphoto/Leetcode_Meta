// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
class Node {
    constructor(i, j, val){
        this.row = i;
        this.col = j;
        this.val = val;
        this.adj = [];
        this.visited = false;
    }
}

var numIslands = function(grid) {
    const g = [];

    for (let i = 0; i < grid.length; i++) {
        const row = [];
        for (let j =0; j < grid[0].length; j++) {
            row.push(new Node(i, j, grid[i][j]));
        }
        g.push(row);
    }

    const getCell = (i, j) => {
        if (i < 0 || j < 0) return undefined;
        if (i >= g.length || j >= g[i].length) return undefined;
        return g[i][j];
    }

    let cnt = 0;

    for (let i = 0; i < g.length; i++) {
        for (let j =0; j < g[0].length; j++) {
            const cell = g[i][j];
            if (cell.val === '1' && !cell.visited) {
                cell.visted = true;
                const queue = [cell];

                while (queue.length > 0) {
                    const first = queue.shift();
                    // console.log('cell', first.row, first.col);
                    const up = getCell(first.row - 1, first.col);
                    const down = getCell(first.row + 1, first.col);
                    const left = getCell(first.row, first.col - 1);
                    const right = getCell(first.row, first.col + 1);

                    if (up && !up.visited && up.val === '1') {
                        queue.push(up);
                        up.visited = true;
                    }
                    if (down && !down.visited && down.val === '1') {
                        queue.push(down);
                        down.visited = true;
                    }
                    if (left && !left.visited && left.val === '1') {
                        queue.push(left);
                        left.visited = true;
                    }
                    if (right && !right.visited && right.val === '1') {
                        queue.push(right);
                        right.visited = true;
                    }
                } 
                cnt++;
            }
        }
    }
    return cnt;
    // console.log(g)
};

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

console.log(numIslands(grid));

