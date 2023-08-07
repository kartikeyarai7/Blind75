var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  let map = {};
  let i = coins.length;
  let count = 0;
  let min;
  let arr = coins.sort((a, b) => a - b);
  while (i > 0) {
    let rem = amount % arr[i];
    if (rem < amount) {
      count += Math.floor(amount / arr[i]);
      amount = rem;
    }

    if (rem === 0) {
      return count;
    }

    i--;
  }
  return count;
};
