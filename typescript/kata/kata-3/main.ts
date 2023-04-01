export function descendingOrder(n: number): any {
  let numberString: Array<number> = n
    .toString()
    .split("")
    .map((number) => parseInt(number));

  return numberString;
}
