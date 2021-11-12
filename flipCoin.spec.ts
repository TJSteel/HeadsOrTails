import { Coin } from './enums';
import { flipCoin } from './flipCoin';
import { expect } from 'chai';

const calculateStandardDeviationOfWin = (winVal: number, wins: number, count: number): number => {
  const mean = (winVal * wins) / count;

  const winVariance = Math.pow(winVal - mean, 2) * wins;
  const loseVariance = Math.pow(0 - mean, 2) * (count - wins);
  const variance = (winVariance + loseVariance) / count;

  return Math.sqrt(variance);
};

describe('flipCoin', () => {
  it('should flip coin randomly be within the standard deviation thresholds', () => {
    const bet = 10;
    const flips = Math.pow(10, 6);
    const winningResult = Coin.HEADS;

    let winCount = 0;

    for (let i = 0; i < flips; i++) {
      const result = flipCoin();
      if (result === winningResult) {
        winCount++;
      }
    }

    const totalBet = bet * flips;
    const totalWin = bet * 2 * winCount;
    const hitRate = winCount / flips;
    const averageWin = totalWin / flips;
    const averagePositiveWin = totalWin / winCount;
    const standardDeviationOfWin = calculateStandardDeviationOfWin(bet * 2, winCount, flips);

    console.info(`
                    total bet: ${totalBet}
                    total win: ${totalWin}
                     hit rate: ${hitRate}
                  average win: ${averageWin}
         average positive win: ${averagePositiveWin}
    standard deviation of win: ${standardDeviationOfWin}
    `);

    expect(standardDeviationOfWin).to.be.above(9.97);
    expect(standardDeviationOfWin).to.be.below(9.98);
  });
});
