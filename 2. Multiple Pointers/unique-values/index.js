function uniqueValues(array) {
  if (array.length === 0) return 0;
  let i = 0;
  let j = 1;

  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }

    j++;
  }

  return i + 1;
}

console.log(uniqueValues([1, 1, 1, 1, 2]));
console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]));
console.log(uniqueValues([-2, -1, -1, 0, 1]));
