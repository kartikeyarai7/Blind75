var isValid = function (s) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    let cur = s[i];

    if (cur === '(' || cur === '{' || cur === '[') {
      stack.push(cur);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let prev = stack.pop();
      if (cur === ')' && prev !== '(') {
        return false;
      }
      if (cur === '}' && prev !== '{') {
        return false;
      }
      if (cur === ']' && prev !== '[') {
        return false;
      }
    }

    i++;
  }
  return stack.length === 0;
};

// Valid Parenthesis using Stack Concept
