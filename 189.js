var rotate = function(nums, k) {
    k = k % nums.length; // Adjust k if it's larger than the array length
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
};

function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3, 99, -1, -100]
