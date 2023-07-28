function prod(nums) {
  let result = [];
  let left = [1];
  let right = [1];
  let i = 1;
  let j = nums.length - 1;
  let leftProd = 1;
  let rightProd = 1;
  while (i < nums.length) {
    leftProd *= nums[i - 1];
    left.push(leftProd);
    i++;
  }
  while (j > 0) {
    rightProd *= nums[j];
    right.push(rightProd);
    j--;
  }
  right.reverse();
  let k = 0;
  while (k < nums.length) {
    result[k] = left[k] * right[k];
    k++;
  }

  console.log(result);
  return result;
}

//  O(N)
// Product Of Itself array
