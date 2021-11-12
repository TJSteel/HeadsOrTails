import { Coin } from './enums';
import { randomNumber } from './utils';

const HEAD_CASES = 7;
const TAIL_CASES = 7;
const SIDE_CASES = 1;
const TOTAL_CASES = HEAD_CASES + TAIL_CASES + SIDE_CASES;

/**
 * Returns a flipped coin
 * @returns a randomly flipped coin based on the set number of possible outcomes
 */
export const flipCoin = (): Coin => {
  const RESULT = randomNumber(1, TOTAL_CASES);
  if (RESULT >= 1 && RESULT <= HEAD_CASES) {
    return Coin.HEADS;
  } else if (RESULT > HEAD_CASES && RESULT <= HEAD_CASES + TAIL_CASES) {
    return Coin.TAILS;
  } else {
    return Coin.SIDE;
  }
};
