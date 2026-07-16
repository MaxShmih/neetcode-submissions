class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const resMap = new Map();

  for (const word of strs) {
    const alfabet = new Array(26).fill(0);

    for (const char of word) {
      let index = char.charCodeAt(0) - 97;
      alfabet[index]++;
    }
    const key = alfabet.join("|");

    if (!resMap.has(key)) {
      resMap.set(key, []);
    }

    resMap.get(key).push(word);
  }
  return [...resMap.values()];
}
}
