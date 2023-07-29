const { findSourceMap } = require("module");
const { parse } = require("path");
const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let sum = 0;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line, 10);
  } else {
    let inputs = line.split(" ").map(Number);
 sum = inputs.reduce((prev, next) => prev + next, sum);
  }
});
rl.on("close", () => {
  let result = sum / n;
  let finalResult = result.toFixed(12);
  console.log(finalResult);
});
