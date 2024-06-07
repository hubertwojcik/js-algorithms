// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productsOfArray(array) {
  if (array.length === 0) return 1;

  return productsOfArray[0] * productsOfArray(array.slice(1));
}
