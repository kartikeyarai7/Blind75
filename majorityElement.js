/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = Math.floor(nums.length / 2);
  let map = {};
  let i = 0;
  while (i < nums.length) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }

    i++;
  }
  for (const [key, value] of Object.entries(map)) {
    if (value > count) {
      return key;
    }
  }
};
