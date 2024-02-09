function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Test cases
let nums1 = [3, 2, 2, 3];
console.log('nums1 length: ' + nums1.length);
let val1 = 3;
let expectedNums1 = [2, 2];
let k1 = removeElement(nums1, val1);
console.log(expectedNums1.length);
console.log(k1 === expectedNums1.length); // true
console.log(nums1.slice(0, k1)); // [2, 2]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let expectedNums2 = [0, 1, 4, 0, 3];
let k2 = removeElement(nums2, val2);
console.log(k2 === expectedNums2.length); // true
console.log(nums2.slice(0, k2)); // [0, 1, 4, 0, 3]
