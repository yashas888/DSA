//here large value will be at last index

const bubbleSort = (nums) => {
  for (let i = nums.length; i > 0; i--) {
    // console.log(i);
    let isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return nums;
};
console.log(bubbleSort([10, 1, 2, 3, 4, 5]));
