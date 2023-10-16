function searchInRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Element found, return its index
        }

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // If the target is within the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            // If the target is within the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Element not found in the array
}

// sample to run the upper functions
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const index = searchInRotatedArray(rotatedArray, target);
console.log(`Index of ${target} in the rotated array: ${index}`);
