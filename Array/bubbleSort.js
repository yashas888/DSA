//here large value will be at last index

const bubbleSort = (nums) => {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
console.log(bubbleSort([11, 23, 4, 5, 6, 77, 33, 4, 52, 24, 3]));
