function maxSubarraySum(array, count) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < count) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
