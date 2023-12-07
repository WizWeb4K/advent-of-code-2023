const fs = require('node:fs');
const input = fs.readFileSync('./input.txt', 'utf8');
const testinput1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const testinput2 = testinput1;

function checkSymb(grid, y, x) {
    const pointsToCheck = [ [y-1,x-1], [y-1,x], [y-1,x+1],
                            [y,x-1],            [y,x+1],
                            [y+1,x-1], [y+1,x], [y+1,x+1] ]
    return pointsToCheck.some(point => {
        const [y_,x_] = point;
        if ((x_ < 0) || (y_ < 0) || (y_ >= grid.length) || (x_ >= grid[y_].length)) {
            return false;
        }
        return grid[y_][x_] != "." && isNaN(grid[y_][x_]);
    })
}

function part1(list) {
    const grid = list.split("\n").map(line => line.split(''));
    let sum = 0;
    
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (!isNaN(grid[y][x])) {
                let num = '';
                let isSymb = false;
                do {
                    num += grid[y][x];
                    if (checkSymb(grid, y, x)) {
                        isSymb = true;
                    };
                    x ++;
                } while (!isNaN(grid[y][x]));
                if (isSymb) {
                    sum += parseInt(num);
                }
            }
        }
    }
    return sum;
}

function part2(list) {
    
}

console.log(part1(testinput1));
console.log(part1(input));
// console.log(part2(testinput2));
// console.log(part2(input));


