const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, piles, m, juicyWorms;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else if (!piles) {
    piles = line.split(" ").map(Number);
  } else if (!m) {
    m = parseInt(line);
  } else {
    juicyWorms = line.split(" ").map(Number);
    findPilesForJuicyWorms(n, piles, m, juicyWorms);
  }
});

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid + 1;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + 1;
}

function findPilesForJuicyWorms(n, piles, m, juicyWorms) {
  const cumulativeSum = [piles[0]];
  for (let i = 1; i < n; i++) {
    cumulativeSum[i] = cumulativeSum[i - 1] + piles[i];
  }

  for (let i = 0; i < m; i++) {
    const juicyWorm = juicyWorms[i];
    const pileNumber = binarySearch(cumulativeSum, juicyWorm);
    console.log(pileNumber);
  }
}
