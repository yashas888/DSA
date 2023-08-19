let isPalindrome = function(x) {
    let num = 0;
  let tempx = x;
  while (tempx > 0) {
    let remainder = tempx % 10;
    tempx = parseInt(tempx / 10);
    num = num * 10 + remainder;
  }
  if (x === num) {
    return true;
  } else {
    return false;
  }
};