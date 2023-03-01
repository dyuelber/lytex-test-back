const readline = require('node:readline');
const fs = require('fs');
const events = require('events');

function fatorial(number) {
    var result = 1;
    for (let index = number; index >= 1; index--) {    
        result *= index;
    }
    return result
}

function somatorioNumeroPar(numbers) {
    var result = 0;
    for (let index = 0; index < numbers.length; index++) {
        const num = numbers[index];
        if ((num % 2) == 0) {
            result += num;
        }
    }

    return result;
}

function somatorioPalavrasCincoCaracteres(words) {
    let result = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index].length >= 5) {
            result++;
        }
    }

    return result;
}

async function readFile() {
    let rs = 0;

    const read = readline.createInterface({
        input: fs.createReadStream('words.txt')
    });

    read.on('line', function (line) {
        rs += somatorioPalavrasCincoCaracteres(line.split(' '));
    });

    await events.once(read, 'close');
    
    return rs;
}

module.exports = {
    fatorial,
    somatorioNumeroPar,
    readFile   
}