var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0.

    let k = 1; // Initialize k to 1 because the first element is always unique.
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // If the current element is different from the previous one.
            nums[k] = nums[i]; // Update nums array with the current unique element.
            k++; // Increment k to track the length of the modified array.
        }
    }

    return k; // Return the length of the modified array.
};
// Test cases
let nums1 = [1, 1, 2];

console.log(nums1[2]);

console.log(removeDuplicates(nums1)); // Output: 2
console.log(nums1); // Output: [1, 2, _]

