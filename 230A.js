const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s, n;
const dragons = [];

rl.on("line", (line) => {
  if (!s) {
    const data = line.trim().split(" ");

    s = parseInt(data[0]);
    n = parseInt(data[1]);
  } else {
    const data = line.trim().split(" ");
    const x = parseInt(data[0]);
    const y = parseInt(data[1]);
    dragons.push({ strength: x, bonus: y });
    if (n === dragons.length) {
      const result = calculate(s, dragons);
      console.log(result ? "YES" : "NO");
      rl.close();
    }
  }
});

function calculate(s, dragons) {
  dragons.sort((a, b) => a.strength - b.strength);

  for (const dragon of dragons) {
    const { strength, bonus } = dragon;
    if (strength >= s) {
      return false;
    }
    s += bonus;
  }
  return true;
}
