var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>= 1;
  }
  return result >>> 0; // Ensure 32-bit unsigned result
};

// Reverse unsigned integer
// Key Idea : Bitwise Operators
// to be treated as binary, it needs to 0b0101... in JS, by default is octal

// Treat like string then
var reverseBits = function (n) {
  let n1 = n.toString(2).split('');
  let n2 = n.toString(2).split('').reverse();
  let num1 = 0;
  for (let i = 0; i < n2.length; i++) {
    num1 = num1 + Math.pow(2, n2.length - 1 - i) * n2[i];
  }

  return num1;
};
