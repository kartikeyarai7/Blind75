var isPalindrome = function (s) {
  let b = s.toLowerCase().split('');
  let c = [];
  b.forEach(item => {
    let range = item.charCodeAt();
    if ((range > 96 && range < 123) || (range > 47 && range < 58)) {
      c.push(item);
    }
  });
  if (c.join('') === c.reverse().join('')) {
    return true;
  }
  return false;
};

// Concept of ASCII to filter out non alpha-numeric char
// Regex alternative to rule out remaining and comparing
