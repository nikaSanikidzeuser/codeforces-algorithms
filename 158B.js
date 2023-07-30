const readline = require('readline');
 
function minimumNumberOfTaxis(n, groups) {
  const count = [0, 0, 0, 0];
  
  // Count the number of groups with 1, 2, 3, and 4 children
  for (let i = 0; i < n; i++) {
    count[groups[i] - 1]++;
  }
 
  // Taxi can carry at most 4 passengers, so we need to combine groups as much as possible
  let taxis = count[3]; // Each group of 4 can go in one taxi
  taxis += count[2]; // Each group of 3 can go in one taxi
 
  // For each group of 1 and 2, try to combine them in a single taxi
  count[0] -= Math.min(count[0], count[2]); // If there are enough groups of 1 to combine with groups of 3
  taxis += Math.ceil((count[1] * 2 + count[0]) / 4); // Combine groups of 1 and 2 in a taxi, each taxi can have at most 4 children
 
  return taxis;
}
 
// Read input and process it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
});
 
rl.on('close', () => {
  const n = parseInt(inputLines[0], 10);
  const groups = inputLines[1].split(' ').map((num) => parseInt(num, 10));
 
  const result = minimumNumberOfTaxis(n, groups);
  console.log(result);
});