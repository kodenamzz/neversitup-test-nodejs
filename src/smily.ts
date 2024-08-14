/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
  //   if (texts.length === 0) return 0;

  //Eyes can be marked as : or ;
  const validEyes = [":", ";"];

  // Valid characters for a nose are - or ~
  const validNoses = ["-", "~"];

  // smiling mouth that should be ) or D
  const validSmiling = [")", "D"];

  let countSmile = 0;

  for (const faceString of texts) {
    if (faceString.length > 3) continue;
    const [eye, noseOrMouth, mouth] = faceString.split("");
    if (!validEyes.some((e) => e === eye)) continue;

    if (!validNoses.some((n) => n === noseOrMouth)) {
      if (
        validSmiling.some((m) => m === noseOrMouth) &&
        faceString.length === 2
      ) {
        countSmile++;
        continue;
      }
      continue;
    }
    if (!validSmiling.some((m) => m === mouth)) continue;
    countSmile++;
  }

  return countSmile;
}

// const res = countSmilyFace([":)", ";(", ";}", ":-D"]);

// console.log("res", res);
