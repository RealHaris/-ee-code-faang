// THE BEST PART I HAVE DONE FULL LOGIC EXCEPT J CONDITION
// WORST PART : I COULDNT EVEN DO IT ON MY OWN AND ITS O(N2) BECAUSE OF SLICE

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let j = 0,
    max = 1;

  for (let i = 0; i < s.length - 1; i++) {
    let character = s.slice(j, i + 1);
    if (character.includes(s[i + 1])) {
      // move j to one after the last occurrence of s[i + 1]
      j = j + character.indexOf(s[i + 1]) + 1;
    }
    max = Math.max(max, i + 2 - j);
  }

  return max;
};

console.log(lengthOfLongestSubstring("dvdf"), "correct answer = ", 3);
