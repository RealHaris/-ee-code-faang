/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }

  let count = 1,
    j = 0,
    max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    console.log(
      "s",
      s.slice(j, i + 1).includes(s[i + 1]),
      s.slice(j, i + 1),
      s[i + 1],
    );

    if (s.slice(j, i + 1).includes(s[i + 1])) {
      // count--;
      j = i;
    } else {
      count++;
    }

    if (max <= count) {
      max = count;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("dvdf"), "correct answer = ", 3);
