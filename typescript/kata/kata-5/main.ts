export const minValue = (values: number[]): number => {
  const newValues: number[] = [];

  values
    .sort((a: number, b: number) => a - b)
    .forEach((value) => {
      if (!newValues.some((newValue) => newValue === value)) {
        newValues.push(value);
      }
    });

  return parseInt(newValues.join(""));
};
