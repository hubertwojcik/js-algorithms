function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const str of str1) {
    frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
  }
  for (const str of str2) {
    frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;

    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

const result = validAnagram("texttwisttime", "timetwisttext"); // true
