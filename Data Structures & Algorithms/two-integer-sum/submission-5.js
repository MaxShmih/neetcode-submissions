class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums) {
            for (let i = 0; i < nums.length; i++) {
                let diff = target - nums[i];
                let second = nums.indexOf(diff)
                if ( second !== -1 && second !== i ) {
                    return [i, second]
                } else continue;
            }
        }
    }
}
