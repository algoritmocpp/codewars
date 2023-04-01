export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let sheepCount = 0;
  arrayOfSheep.forEach((sheep) => {
    if (typeof sheep === "boolean" && sheep) sheepCount++;
  });

  return sheepCount;
}
