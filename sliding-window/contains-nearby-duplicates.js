/*
Given an integer array nums and an integer k, return true
if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]).key - i) <= k) {
      return true;
    } else {
      map.set(nums[i], { key: i, value: 1 });
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), "Actual Answer = ", true);
