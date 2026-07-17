class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const mapCounter = new Map();
  const res = [];

  for (const count of nums) {
    mapCounter.set(count, (mapCounter.get(count) ?? 0) + 1);
  }

  let temp = [...mapCounter.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(temp[i][0]);
  }

  return res;
    }
}