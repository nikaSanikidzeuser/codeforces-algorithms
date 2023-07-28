const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line, 10);
  } else {
    const [h, m] = line.split(" ").map(Number);

    const result = (23 - h) * 60 + (60 - m);

    console.log(result);
    if (--n === 0) {
      rl.close();
    }
  }
});
