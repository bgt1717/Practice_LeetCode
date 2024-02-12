var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1])); // Output: 1
console.log(majorityElement([1, 2, 3, 4, 5, 5, 5, 5])); // Output: 5
console.log(majorityElement([1, 1, 2, 2, 2])); // Output: 2
