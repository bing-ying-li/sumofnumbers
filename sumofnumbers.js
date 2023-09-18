const test = [1, 2, 3, 4, 5];
function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    // add total number
    total += num;
  }
  return total;
}
console.log(sumFor(test));
function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(test));
function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(test));

const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num) { return memo + num; }, 0);
console.log(sumTheSimpleWay(test));
