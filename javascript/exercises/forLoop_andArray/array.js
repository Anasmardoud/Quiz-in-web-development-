let prices = [5, 10, 20, 30, 55];
let username = "Anas";

// First loop
for (let i = 0; i < prices.length; i++) {
    document.write(`hi ${username} you have ${prices[i]}<br>`);
}

// Second loop
for (let i = prices.length - 1; i >= 0; i--) {
    document.write(`hi ${username} you have ${prices[i]}<br>`);
}

// Third loop
for (let price of prices) {
    document.write(`hi ${username} you have ${price}<br>`);
}
prices.sort().reverse();