// Read input data from stdin
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line.trim());
});
rl.on('close', () => {
    let n = parseInt(input[0]);
    // Parse laptop details
    // Convert string to integer for both price and quality
    let laptops = input.slice(1).map(laptop => laptop.split(' ').map(Number));
    // Sort laptops array by price
    laptops.sort((a, b) => a[0] - b[0]);
    
    // Check if there exists a laptop with better quality but lower price
    for (let i = 0; i < n - 1; i++) {
        // If the quality of the i-th laptop is higher than the quality of the (i+1)-th laptop
        // Then Alex is correct
        if (laptops[i][1] > laptops[i+1][1]) {
            console.log("Happy Alex");
            return;
        }
    }
    // If we didn't find any laptop with better quality but lower price
    // Then Dima is correct
    console.log("Poor Alex");
});