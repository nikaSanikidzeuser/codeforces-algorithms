const { parse } = require("path");
const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [n, m] = line.split(" ").map((num) => parseInt(num));

  const min = Math.min(n, m);

  const winner = min % 2 === 0 ? "Malvika" : "Akshat";
  console.log(winner);
  rl.close()
});
