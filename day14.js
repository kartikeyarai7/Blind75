var removeElement = function (nums, val) {
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums[i] = -1;
      count++;
    }
    i++;
  }
  nums.sort((a, b) => b - a);
  return nums.length - count;
};

// Read Q
// Better way to bring everything to the left of val
