function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return false;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
