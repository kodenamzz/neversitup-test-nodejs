/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number {
  const countedNumbers: {
    [key: number]: number;
  } = {};

  // store count for every number  to countedNumbers
  for (const num of numbers) {
    const prevCount: number = countedNumbers[num] || 0;
    countedNumbers[num] = prevCount + 1;
  }

  // find number in countedNumber that  where cuont is odd number
  for (const [num, count] of Object.entries(countedNumbers)) {
    if (count % 2 !== 0) {
      return Number(num);
    }
  }
  return -99.9; // if not found any integer that appears an odd number of times will return -99.9
}
