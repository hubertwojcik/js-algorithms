function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let firstNumCount = {};
  let secondNumCount = {};

  for (const str of strNum1) {
    firstNumCount[str] = (firstNumCount[str] || 0) + 1;
  }
  for (const str of strNum2) {
    secondNumCount[str] = (secondNumCount[str] || 0) + 1;
  }

  for (let key in firstNumCount) {
    if (firstNumCount[key] !== secondNumCount[key]) return false;
  }

  return true;
}
