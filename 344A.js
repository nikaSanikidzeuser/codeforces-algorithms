const { parse } = require("path");
const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let count = 0;
let last;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line, 10);
  } else {
    const orientation = line;

    if (!last || orientation !== last) {
      count++;
    }
    last = orientation;
    if (--n === 0) {
      console.log(count);
      rl.close();
    }
  }
});
