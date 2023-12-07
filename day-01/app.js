const fs = require('node:fs');
const input = fs.readFileSync('./input.txt', 'utf8');
const testinput1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testinput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

function part1(list) {
    const listElement = list.split("\n");
    let sum = 0;
    
    listElement.forEach(element => {
        const firstNumber = element.match(/[1-9]/);
    
        const elementChar = element.split('');
        const elemenReverse = elementChar.reverse().join('');
        const lastNumber = elemenReverse.match(/[1-9]/);

        const elementNr = firstNumber[0].concat(lastNumber[0]);
        sum = sum + parseInt(elementNr);
    });
    return sum;
}

function strToNum(x) {
    switch (x) {
        case 'one':
            return '1';
        case 'two':
            return '2';
        case 'three':
            return '3';
        case 'four':
            return '4';
        case 'five':
            return '5';
        case 'six':
            return '6';
        case 'seven':
            return '7';
        case 'eight':
            return '8';
        case 'nine':
            return '9';
        default: 
            return x;
    }
}

function part2(list) {
    const listElement = list.split("\n");
    let sum = 0;
    const search = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    listElement.forEach(element => {
        let lowestIndex = element.length;
        let highestIndex = 0;
        let firstNumber, lastNumber

        search.forEach(searchTerm => {
            const idxFirst = element.indexOf(searchTerm);
            const idxLast = element.lastIndexOf(searchTerm);

            if (idxFirst != -1 && idxFirst <= lowestIndex) {
                lowestIndex = idxFirst;
                firstNumber = searchTerm;
            }
            if (idxLast != -1 && idxLast >= highestIndex) {
                highestIndex = idxLast;
                lastNumber = searchTerm;
            }
        });
        firstNumber = strToNum(firstNumber);
        lastNumber = strToNum(lastNumber);
        
        const elementNr = firstNumber.concat(lastNumber);
        sum = sum + parseInt(elementNr);
    });
    return sum;
}

console.log(part1(testinput1));
console.log(part1(input));
console.log(part2(testinput2));
console.log(part2(input));
