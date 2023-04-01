type Roman<T> = {
  [key: string]: T;
  I: T;
  V: T;
  X: T;
  L: T;
  C: T;
  D: T;
  M: T;
};

const romanValue = (letter: string): number => {
  const values: Roman<number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return values[letter];
};

export function solution(roman: string): number {
  const romanNumbers: Array<number> = roman
    .split("")
    .map((letter: string) => romanValue(letter));

  // const result = romanNumbers.reduce((acc, curr) => {});

  return result;
}
