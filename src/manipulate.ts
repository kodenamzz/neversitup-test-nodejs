/**
 * like Array.splice but return new value of array not mutate same array
 * @param anyArray array to slice"
 * @param startIndex number starting index
 * @param deleteCount number of element want to remove
 * @returns {any[]} array of result
 */
const splicedArray = <T>(
  anyArray: T[],
  startIndex: number,
  deleteCount: number
): T[] => {
  return [
    ...anyArray.slice(0, startIndex),
    ...anyArray.slice(startIndex + deleteCount),
  ];
};

/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
  if (text.length === 0) return [""];
  const textArray: string[] = text.split("");

  let shuffleChars: string[] = [];
  for (let index = 0; index < textArray.length; index++) {
    const currentChar = textArray[index];

    // const restChars = [...textArray];
    // restChars.splice(index, 1);
    const restChars = splicedArray(textArray, index, 1);

    // recursive func to get permutations for rest chars
    const getPermutationsFromRestChars = manipulate(restChars.join(""));
    shuffleChars = [
      ...shuffleChars,
      ...getPermutationsFromRestChars.map((chars) => currentChar + chars),
    ];
  }

  return [...new Set(shuffleChars)]; // make it Unique
}
