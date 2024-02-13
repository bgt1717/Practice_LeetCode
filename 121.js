//121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    if (!prices || prices.length <= 1) {
        return 0;
    }
    //initialize variables
    let minPrice = prices[0]; //minPrice = 7
    let maxProfit = 0;
    
    // Iterate through the prices array starting from the second element
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]); // min(7,1)=1 // min(1,5)= 1 //min(1,3)= 1 //min(1,6)= 1 // min(1,4) = 1
        maxProfit = Math.max(maxProfit, prices[i] - minPrice); 
        // max(0,1-7=-6)= 0 no profit cont. ,max(0, 5-1) = 4 // max(4, 3-1) = 4 // max(4, 6-1) = 5 //max(5, 4-1 ) = 5
}
    
    return maxProfit;
};

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0


