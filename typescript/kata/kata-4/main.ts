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

  const result = romanNumbers.reduce((acc, curr, currIndex) => {
    if (currIndex === 1 && acc < curr) return curr - acc;
    return curr < romanNumbers[currIndex + 1] ? acc - curr : acc + curr;
  });

  return result;
}

// Other people solutions, user sz-piotr

const values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function solutionTwo(roman: string): number {
  let value = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]];
    const next = values[roman[i + 1]] || 0;
    if (current < next) {
      value -= current;
    } else {
      value += current;
    }
  }
  return value;
}
