var twoSum = function (nums, target) {
  // valid inputs
  let i = 0;
  let map = {};

  while (i < nums.length) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [i, map[complement]];
    }
    map[nums[i]] = i;
    i++;
  }
};

// Time Complexity -> O(n)
// Space Complexity -> O(n)
