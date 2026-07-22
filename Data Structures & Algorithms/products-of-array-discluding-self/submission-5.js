class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const resLeft = [];
  let leftProducts = 1;

  for (let i = 0; i < nums.length; i++) {
    resLeft.push(leftProducts);
    leftProducts *= nums[i];
  }

  let rightProduct = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    resLeft[j] *= rightProduct;
    rightProduct *= nums[j];
  }

  return resLeft;
    }
}
