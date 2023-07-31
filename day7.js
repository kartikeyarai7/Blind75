// Anagram
// t made by rearranging s
// Compare length and number of occurences

var isAnagram = function (s, t) {
  if (t.length === s.length) {
    let arr = s.split('');
    let i = 0;
    while (i < arr.length) {
      if (!t.includes(arr[i])) {
        return false;
      }
      i++;
    }
    return true;
  }
  return false;
};
