const { parse } = require("path");
const readline = require("readline");

// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;
let rooms = [];

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line, 10);
  } else {
    const [pi, qi] = line.split(" ").map((num) => parseInt(num, 10));
    rooms.push([pi, qi]);
  }
 
});

rl.on("close", (line) => {
 
  const result = calculate(n, rooms);
  console.log(result);
  rl.close();
});


function calculate(n, rooms) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    const [pi, qi] = rooms[i];
    if (qi - pi >= 2) {
      count++;
    }
  }
  return count;
}
