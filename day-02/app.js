const fs = require('node:fs');
const input = fs.readFileSync('./input.txt', 'utf8');
const testinput1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

const testinput2 = testinput1;

function part1(list) {
    const red = 12; 
    const green = 13;
    const blue = 14;
    let sumID = 0;

    const games = list.split("\n");
    games.forEach(game => {
        const [idStr, roundsStr] = game.split(":");
        const id = idStr.slice(5);
        const rounds = roundsStr.split(";")

        const maxCube = {
            red: 0,
            green: 0,
            blue: 0
        }

        rounds.forEach(round => {
            const cubes = round.split(",")
            cubes.forEach(cube => {
                const [amountStr, color] = cube.trim().split(" ");
                const amount = parseInt(amountStr);
                if (amount > maxCube[color]) {
                    maxCube[color] = amount;
                }
            });
        });
        if (maxCube.red <= red && maxCube.green <= green && maxCube.blue <= blue) {
            sumID += parseInt(id);
        } 
    });
    return sumID;
}

function part2(list) {
    let sumID = 0;

    const games = list.split("\n");
    games.forEach(game => {
        const [idStr, roundsStr] = game.split(":");
        const id = idStr.slice(5);
        const rounds = roundsStr.split(";")

        const maxCube = {
            red: 0,
            green: 0,
            blue: 0
        }

        rounds.forEach(round => {
            const cubes = round.split(",")
            cubes.forEach(cube => {
                const [amountStr, color] = cube.trim().split(" ");
                const amount = parseInt(amountStr);
                if (amount > maxCube[color]) {
                    maxCube[color] = amount;
                }
            });
        });
        const power = maxCube.red * maxCube.green * maxCube.blue;
        sumID += power;
    });
    return sumID;
}

console.log(part1(testinput1));
console.log(part1(input));
console.log(part2(testinput2));
console.log(part2(input));
