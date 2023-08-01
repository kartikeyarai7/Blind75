var missingNumber = function (nums) {
  let i = 0;
  let obj = {};
  while (i < nums.length) {
    obj[nums[i]] = i;
    i++;
  }
  let j = 0;
  while (j <= nums.length) {
    if (obj[j] === undefined) {
      return j;
    }
    j++;
  }
};

// O(n + n)
// Better way to use n(n+1/2) - sum
// Alternative is to  fill,sort array and flag for remaining index
