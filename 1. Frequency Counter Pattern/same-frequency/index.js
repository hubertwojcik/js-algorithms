function areThereDuplicates(...args) {
  const array = [...args];
  const lookup = {};

  for (const key of array) {
    if (lookup[key]) return true;
    lookup[key] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
