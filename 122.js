var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { // 1 > prices[0] = false, 5 > prices[1] = true, // 3 > prices[2] = false, // 6 > 3 = true, // 4 > 6 false.
            maxProfit += prices[i] - prices[i - 1]; // -- // prices[2] - prices[1] = 5-1 = 4 // -- // prices[4] - prices [3] = 6-3 = 3  // 
            // maxProfit = 4 + 3 = 7
        }
    }
    return maxProfit;
};

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Output: 7
console.log(maxProfit([1,2,3,4,5]));   // Output: 4
console.log(maxProfit([7,6,4,3,1]));   // Output: 0
