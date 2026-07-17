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

  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (const [key, value] of mapCounter) {
    bucket[value].push(key);
  }

  for (let i = bucket.length - 1; i > 0; i--) {
    for (const count of bucket[i]) {
        res.push(count);
        if (res.length === k) return res;
    }
  }

  
    }
}