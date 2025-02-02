import { Score as ScoreType } from '../../types';

export const Score = ({ score }: { score: ScoreType }) => {
  const { correct, total, successRate } = score;
  return (
    <div>
      <div>Score: {correct} of of {total}</div>
      <div>Percentage: {successRate}%</div>
    </div>
  );
};
