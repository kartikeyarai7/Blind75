// Anagram
// t made by rearranging s
// Compare length and number of occurences
// Can also use sort, join and compare

var isAnagram = function (s, t) {
  if (t.length === s.length) {
    let obj = {};
    let obj2 = {};
    let i = 0;
    while (i < t.length) {
      if (obj[t[i]] === undefined) {
        obj[t[i]] = 1;
      } else {
        obj[t[i]]++;
      }
      i++;
    }

    let j = 0;
    while (j < s.length) {
      if (obj2[s[j]] === undefined) {
        obj2[s[j]] = 1;
      } else {
        obj2[s[j]]++;
      }
      j++;
    }

    for (let item in obj) {
      if (obj[item] !== obj2[item]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
