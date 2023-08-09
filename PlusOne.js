/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join('')) + BigInt(1)).toString().split('');
};

// Key Idea here was the bigInt as the description hinted at a large integer so it will not fit in Number()
// Use str.join("") instead of map
