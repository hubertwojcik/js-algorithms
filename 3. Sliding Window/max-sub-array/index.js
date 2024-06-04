function maxSubarraySum(array, count) {
  let maxSum;
  let tempSum;
//SUMA PIERWSZYCH N ELEMENTOW
  for (let i = 0; i < count; i++) {
    maxSum += array[i];
  }
  tempSum=maxSum;
  for(let i =num;i<array.length;i++){
    tempSum=tempSum-array[i-num]+array[i];
    maxSum=Math.max(tempSum,maxSum)
  }

  return maxSubarraySum,
}
