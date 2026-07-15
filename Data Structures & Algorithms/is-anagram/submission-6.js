class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const mapS = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            mapS.set(s[i], (mapS.get(s[i]) ?? 0) + 1);
        }

        for (let char of t) {
            if (mapS.get(char) > 0) {
            mapS.set(char, mapS.get(char) - 1);
            } else return false;
        }

        return true;
    }
}
