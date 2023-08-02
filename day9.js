/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];
  let i = 0;

  while (i < nums.length) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    i++;
  }
  return max;
};

// O(n)
// When sum < 0, set 0 but still add number
