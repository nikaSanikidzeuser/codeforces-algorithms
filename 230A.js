// Read input data from stdin
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s, n; // Initialize variables to store Kirito's strength (s) and the number of dragons (n)
const dragons = []; // Initialize an array to store dragon details (strength and bonus)

rl.on("line", (line) => {
  if (!s) {
    const data = line.trim().split(" ");

    s = parseInt(data[0]);
    n = parseInt(data[1]);

  } else {
    const data = line.trim().split(" ");
    const x = parseInt(data[0]);
    const y = parseInt(data[1]);
    const ({strength : x, bonus : y}) = data.push(dragons);
  }
});
