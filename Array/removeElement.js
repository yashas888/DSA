var removeElement = function (nums, val) {
  let j = 0;
  for (let n of nums) if (n !== val) nums[j++] = n;
  return j;
};

// Intuition
// The intuition behind this approach is to iterate through the array and keep track of two pointers: j and n. The pointer j represents the index of the current element we want to keep in the modified array, and the pointer n iterates through the original array elements.

// Approach
// The approach involves iterating through each element of the array nums. If the current element n is not equal to the target value val, we update the element at index j in the array to be the current element n, and then increment j by 1. By doing this, we effectively remove any occurrences of val from the array and compact the elements towards the beginning.
