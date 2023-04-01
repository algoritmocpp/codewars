export function descendingOrder(n: number): number {
  return parseInt(
    n
      .toString()
      .split("")
      .map((number) => parseInt(number))
      .sort((a: number, b: number) => b - a)
      .join("")
  );
}
