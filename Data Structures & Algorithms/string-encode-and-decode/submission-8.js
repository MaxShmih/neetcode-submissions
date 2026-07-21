class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

  for (const word of strs) {
    res += word.length + "|" + word;
  }

  return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encoded) {
     const res = [];
  let i = 0;

  while (i < encoded.length) {
    let determinate = i;

    while (encoded[determinate] !== "|") {
      determinate++;
    }

    const numberString = encoded.slice(i, determinate);
    const lengthNumber = Number(numberString);

    const wordStart = determinate + 1;
    const wordEnd = wordStart + lengthNumber;
    const word = encoded.slice(wordStart, wordEnd);

    res.push(word);

    i = wordEnd;
  }
  return res;
    }
}
