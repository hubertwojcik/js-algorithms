function findLongestSubstring(string) {
  let start = 0;
  let stringLength = 0;
  let lookup = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (lookup[char] >= start) {
      start = lookup[char] + 1;
    }

    lookup[char] = i;
    stringLength = Math.max(stringLength, i - start + 1);
  }

  return stringLength;
}

const res1 = findLongestSubstring(""); // 0
console.log("🚀 ~ res1:", res1);
const res2 = findLongestSubstring("rithmschool"); // 7
console.log("🚀 ~ res2:", res2);
const res3 = findLongestSubstring("thisisawesome"); // 6
console.log("🚀 ~ res3:", res3);
const res4 = findLongestSubstring("thecatinthehat"); // 7
console.log("🚀 ~ res4:", res4);
const res5 = findLongestSubstring("bbbbbb"); // 1
console.log("🚀 ~ res5:", res5);
const res6 = findLongestSubstring("longestsubstring"); // 8
console.log("🚀 ~ res6:", res6);
const res7 = findLongestSubstring("thisishowwedoit"); // 6
console.log("🚀 ~ res7:", res7);
