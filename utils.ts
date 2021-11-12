/**
 * Returns a random number
 * @param min the lowest value to be returned
 * @param max the largest value to be returned
 * @returns a random integer ranging inclusively from min to max
 */
export const randomNumber = (min: number, max: number): number => {
  const RANGE = max - min + 1;
  return Math.floor(Math.random() * RANGE) + min;
};
