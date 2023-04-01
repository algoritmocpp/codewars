export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let sheepCount = 0;
  arrayOfSheep.forEach((sheep) => {
    if (typeof sheep === "boolean" && sheep) sheepCount++;
  });

  return sheepCount;
}

// Solutions of other people, more clever and best pratices

export function countSheepsClever(
  arrayOfSheep: (boolean | undefined | null)[]
) {
  return arrayOfSheep.filter(Boolean).length;
}
