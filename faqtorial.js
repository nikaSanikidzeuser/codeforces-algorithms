// Read input data from stdin
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, piles, m, juicyWorms;

rl.on('line', (line) => {
    if (!n) {
        n = parseInt(line);
    } else if (!piles) {
        piles = line.split(' ').map(Number);
    } else if (!m) {
        m = parseInt(line);
    } else {
        juicyWorms = line.split(' ').map(Number);
        findPilesForJuicyWorms(n, piles, m, juicyWorms);
    }
});

function findPilesForJuicyWorms(n, piles, m, juicyWorms) {
    const cumulativeSum = [piles[0]];
    for (let i = 1; i < n; i++) {
        cumulativeSum[i] = cumulativeSum[i - 1] + piles[i];
    }

    for (let i = 0; i < m; i++) {
        const juicyWorm = juicyWorms[i];
        let pileNumber = 1;
        while (juicyWorm > cumulativeSum[pileNumber - 1]) {
            pileNumber++;
        }
        console.log(pileNumber);
    }
}

// Example usage with input reading
// You can remove this part when submitting to Codeforces
// Commented out for testing purposes

// const input = `5
// 2 7 3 4 9
// 3
// 1 25 11`;

// const lines = input.split('\n');
// let currentLine = 0;

// const n = parseInt(lines[currentLine++]);
// const piles = lines[currentLine++].split(' ').map(Number);
// const m = parseInt(lines[currentLine++]);
// const juicyWorms = lines[currentLine++].split(' ').map(Number);

// findPilesForJuicyWorms(n, piles, m, juicyWorms);
