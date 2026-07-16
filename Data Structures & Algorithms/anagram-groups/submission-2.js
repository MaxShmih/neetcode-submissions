class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const resMap = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!resMap.has(key)) {
      resMap.set(key, []);
    }

    resMap.get(key).push(word);
  }
  return [...resMap.values()];
    }
}
