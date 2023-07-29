const { parse } = require("path");
const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let passangers = 0;
let capacity = 0;
rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line, 10);
  } else {
    const [enter, exit] = line.split(" ").map((num) => parseInt(num, 10));

    passangers -= enter;
    passangers += exit;

    capacity = Math.max(capacity,passangers);

    if (--n === 0) return console.log(capacity) && rl.close();
  }
});
