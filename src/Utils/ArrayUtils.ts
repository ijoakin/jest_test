export const sumArray = (): number => {
  const ar: number[] = [1, 2, 3, 4, 5, 6, 7];
  let total = 0;
  ar.map((value: number) => {
    total += value;
  });

  return total;
};

export const sumArrayReduce = (): number => {
  const ar: number[] = [1, 2, 3, 4, 5, 6, 7];
  const total = ar.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue
  );
  return total;
};